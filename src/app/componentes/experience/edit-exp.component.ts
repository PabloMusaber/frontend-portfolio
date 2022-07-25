import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Storage, ref, uploadBytes, getDownloadURL, StorageReference} from '@angular/fire/storage';
import { Experiencia } from 'src/app/model/experiencia';


@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent {

  empresa = '';
  descripcion = '';
  imagen = '';
  file!: File;
  imgRef!: StorageReference;

  constructor(
    private experienciaService: ExperienciaService, 
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
    const experiencia = new Experiencia(
      this.empresa, 
      this.descripcion,
      this.imagen
    );
    this.experienciaService.update(experiencia, id).subscribe(
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
