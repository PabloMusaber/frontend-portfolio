import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-edit-habi',
  templateUrl: './edit-habi.component.html',
  styleUrls: ['./edit-habi.component.css']
})
export class EditHabiComponent {

  nombre = '';
  porcentaje = 0;

  constructor(
    private habilidadService: HabilidadService, 
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    const habi = new Habilidad(this.nombre, this.porcentaje);

    this.habilidadService.update(habi, id).subscribe(
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
