import { Component} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EducacionService } from 'src/app/servicios/educacion.service';
@Component({
  selector: 'app-new-edu',
  templateUrl: './new-edu.component.html',
  styleUrls: ['./new-edu.component.css']
})
export class NewEduComponent {

  institucion = '';
  titulo = '';
  anio = '';
  imagen: File | undefined;

  constructor(
    private educacionService: EducacionService,
    private toastr: ToastrService
  ) { }

  onFileSelected(event: any){
    this.imagen = <File>event.target.files[0];
  }

  onCreate(): void {
    const fd:any = new FormData();
    fd.append('institucion', this.institucion);
    fd.append('titulo', this.titulo);
    fd.append('anio', this.anio);
    fd.append('imagen', this.imagen);
    
    this.educacionService.save(fd). subscribe(
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
