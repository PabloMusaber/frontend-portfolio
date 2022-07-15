import { Component} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent{

  empresa = '';
  descripcion = '';
  imagen: File | undefined;

  constructor(
    private experienciaService: ExperienciaService, 
    private toastr: ToastrService
  ) { }

  onFileSelected(event: any){
    this.imagen = <File>event.target.files[0];
  }

  onCreate(): void {
    const fd:any = new FormData();
    fd.append('imagen', this.imagen);
    fd.append('empresa', this.empresa);
    fd.append('descripcion', this.descripcion);
    
    this.experienciaService.save(fd). subscribe(
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

  

