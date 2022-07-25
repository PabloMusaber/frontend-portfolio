import { Component} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Storage, ref, uploadBytes, getDownloadURL, StorageReference} from '@angular/fire/storage';
import { Proyecto } from 'src/app/model/proyecto';

@Component({
  selector: 'app-new-proy',
  templateUrl: './new-proy.component.html',
  styleUrls: ['./new-proy.component.css']
})
export class NewProyComponent {

  nombre = '';
  descripcion = '';
  github = '';
  link = '';
  imagen = '';
  file!: File;
  imgRef!: StorageReference;

  constructor(
    private proyectoService: ProyectoService,
    private toastr: ToastrService,
    private storage: Storage
  ) { }

  onFileSelected($event: any){
    this.file = <File>$event.target.files[0];
    this.imgRef = ref(this.storage, `images/${this.file.name}`);
  }

  onUpload(): void {

    if(this.file != undefined){
      uploadBytes(this.imgRef, this.file)
        .then(async response => {
          console.log("Imagen subida correctamente.")
          this.imagen = await getDownloadURL(this.imgRef);
          this.onCreate();
        })
        .catch(error => console.log(error));
    }
  }

  onCreate():void {
    const proyecto = new Proyecto(
      this.nombre, 
      this.descripcion,
      this.github,
      this.link,
      this.imagen
    );
    
    this.proyectoService.save(proyecto). subscribe(
      data => {
        this.toastr.success('Proyecto creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        setTimeout(() => {
          document.location.href="/";
        }, 2000);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  goBack(): void{
    document.location.href="/";
  }

}
