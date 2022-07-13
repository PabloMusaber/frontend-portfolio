import { Component } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent {

  company_edu = '';
  title_edu = '';
  anio_edu = '';
  imagen: File | undefined;

  constructor(
    private educacionService: EducacionService, 
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  onFileSelected(event: any){
    this.imagen = <File>event.target.files[0];
  }

  onUpdate(): void {
    
    const id = this.activatedRoute.snapshot.params['id'];
    const fd:any = new FormData();
    fd.append('company_edu', this.company_edu);
    fd.append('title_edu', this.title_edu);
    fd.append('anio_edu', this.anio_edu);
    fd.append('imagen', this.imagen);

    this.educacionService.update(fd, id).subscribe(
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
