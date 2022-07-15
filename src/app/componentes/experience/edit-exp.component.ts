import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent {

  empresa = '';
  descripcion = '';
  imagen: File | undefined;

  constructor(
    private experienciaService: ExperienciaService, 
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  onFileSelected(event: any){
    this.imagen = <File>event.target.files[0];
  }

  onUpdate(): void {
    
    const id = this.activatedRoute.snapshot.params['id'];
    const fd:any = new FormData();
    fd.append('imagen', this.imagen);
    fd.append('empresa', this.empresa);
    fd.append('descripcion', this.descripcion);

    this.experienciaService.update(fd, id).subscribe(
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
