import { Component} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-new-proy',
  templateUrl: './new-proy.component.html',
  styleUrls: ['./new-proy.component.css']
})
export class NewProyComponent {

  title_project = '';
  description_project = '';
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
    fd.append('title_project', this.title_project);
    fd.append('description_project', this.description_project);
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
