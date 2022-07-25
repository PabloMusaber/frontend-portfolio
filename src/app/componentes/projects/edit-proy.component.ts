import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Storage, ref, uploadBytes, getDownloadURL, StorageReference} from '@angular/fire/storage';
import { Proyecto } from 'src/app/model/proyecto';

@Component({
  selector: 'app-edit-proy',
  templateUrl: './edit-proy.component.html',
  styleUrls: ['./edit-proy.component.css']
})
export class EditProyComponent {

  nombre = '';
  descripcion = '';
  github = '';
  link = '';
  imagen = '';
  file!: File;
  imgRef!: StorageReference;

  constructor(
    private proyectoService: ProyectoService, 
    private activatedRoute: ActivatedRoute,
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
          this.onUpdate();
        })
        .catch(error => console.log(error));
    }else{
      this.onUpdate();
    }
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    const proyecto = new Proyecto(
      this.nombre, 
      this.descripcion,
      this.github,
      this.link,
      this.imagen
    );
    this.proyectoService.update(proyecto, id).subscribe(
      data => {
        this.toastr.success('Información Actualizada', 'OK', {
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
