import { Component} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Storage, ref, uploadBytes, getDownloadURL, StorageReference} from '@angular/fire/storage';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-new-edu',
  templateUrl: './new-edu.component.html',
  styleUrls: ['./new-edu.component.css']
})

export class NewEduComponent {

  institucion = '';
  titulo = '';
  anio = '';
  imagen = '';
  file!: File;
  imgRef!: StorageReference;

  constructor(
    private educacionService: EducacionService,
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
    }else{
      this.onCreate();
    }
  }

  onCreate(): void {
    const educacion = new Educacion(
      this.anio,
      this.institucion,
      this.titulo,
      this.imagen
    );
    this.educacionService.save(educacion). subscribe(
      data => {
        this.toastr.success('Educación creada', 'OK', {
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
