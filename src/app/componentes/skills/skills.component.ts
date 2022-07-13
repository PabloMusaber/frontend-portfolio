import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidades: Habilidad[]= [];
  isLogged = false;


  constructor(
    private habilidadService:HabilidadService,
    private toastr: ToastrService, 
    private tokenService: TokenService
    ) { }

    ngOnInit() {
      this.cargarHabilidades();
      if(this.tokenService.getToken()){
        this.isLogged= true;
      }else{
        this.isLogged = false;
      }
    }

    cargarHabilidades(): void {
      this.habilidadService.lista().subscribe(
        data => {
          this.habilidades = data;
        },
        err => {
          console.log(err);
        }
      );
    }
    
    borrar(id_habi: number) {
      if(confirm("¿Estás seguro que deseas eliminar esta información?")){
        this.habilidadService.delete(id_habi).subscribe(
          data => {
            this.toastr.success('Habilidad Eliminada', 'OK', {
              timeOut: 3000, positionClass: 'toast-top-center'
            });
            this.cargarHabilidades();
          },
          err => {
            this.toastr.error(err.error.mensaje, 'Fail', {
              timeOut: 3000, positionClass: 'toast-top-center',
            });
          }
        );
      }
    }

}
