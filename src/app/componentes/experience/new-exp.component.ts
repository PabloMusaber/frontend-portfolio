import { Component} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Storage, ref, uploadBytes, getDownloadURL, StorageReference} from '@angular/fire/storage';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent{

  empresa = '';
  descripcion = '';
  imagen = '';
  file!: File;
  imgRef!: StorageReference;

  constructor(
    private experienciaService: ExperienciaService, 
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
    const experiencia = new Experiencia(
      this.empresa, 
      this.descripcion,
      this.imagen
    );
    this.experienciaService.save(experiencia). subscribe(
      data => {
        this.toastr.success('Experiencia laboral creada', 'OK', {
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

  

