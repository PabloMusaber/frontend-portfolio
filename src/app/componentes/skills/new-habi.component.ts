import { Component} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-new-habi',
  templateUrl: './new-habi.component.html',
  styleUrls: ['./new-habi.component.css']
})
export class NewHabiComponent {

  name_skill = '';
  percent = 0;

  constructor(
    private habilidadService: HabilidadService,
    private toastr: ToastrService
  ) { }

  onCreate(): void {

    const habi = new Habilidad(this.name_skill, this.percent);
    
    this.habilidadService.save(habi). subscribe(
      data => {
        this.toastr.success('Habilidad creada', 'OK', {
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
