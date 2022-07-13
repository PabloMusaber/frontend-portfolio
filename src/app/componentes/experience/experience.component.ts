import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ToastrService } from 'ngx-toastr';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiencias: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaService, 
    private toastr: ToastrService, 
    private tokenService: TokenService) { }
    isLogged = false;

  ngOnInit() {
    this.cargarExperiencias();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencias(): void {
    this.experienciaService.lista().subscribe(
      data => {
        this.experiencias = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id_exp: number) {
    if(confirm("¿Estás seguro que deseas eliminar esta información?")){
      this.experienciaService.delete(id_exp).subscribe(
        data => {
          this.toastr.success('Experiencia Eliminada', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.cargarExperiencias();
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
