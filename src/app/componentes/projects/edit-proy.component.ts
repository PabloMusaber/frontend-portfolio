import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

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
  imagen: File | undefined;

  constructor(
    private proyectoService: ProyectoService, 
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  onFileSelected(event: any){
    this.imagen = <File>event.target.files[0];
  }

  onUpdate(): void {

    const id = this.activatedRoute.snapshot.params['id'];
    const fd:any = new FormData();
    fd.append('nombre', this.nombre);
    fd.append('descripcion', this.descripcion);
    fd.append('github', this.github);
    fd.append('link', this.link);
    fd.append('imagen', this.imagen);

    this.proyectoService.update(fd, id).subscribe(
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
