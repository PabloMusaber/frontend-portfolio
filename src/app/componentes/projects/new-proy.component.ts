import { Component} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

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
  imagen: File | undefined;

  constructor(
    private proyectoService: ProyectoService,
    private toastr: ToastrService
  ) { }

  onFileSelected(event: any){
    this.imagen = <File>event.target.files[0];
  }

  onCreate(): void {
    const fd:any = new FormData();
    fd.append('nombre', this.nombre);
    fd.append('descripcion', this.descripcion);
    fd.append('github', this.github);
    fd.append('link', this.link);
    fd.append('imagen', this.imagen);
    
    this.proyectoService.save(fd). subscribe(
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
