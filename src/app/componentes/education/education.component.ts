import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { ToastrService } from 'ngx-toastr';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {

  educaciones: Educacion[] = [];
  isLogged = false;

  constructor(
    private educacionService: EducacionService, 
    private toastr: ToastrService, 
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarEducaciones();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged = false;
    }
  }

  cargarEducaciones(): void {
    this.educacionService.lista().subscribe(
      data => {
        this.educaciones = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id_edu: number) {
    if(confirm("¿Estás seguro que deseas eliminar esta información?")){
      this.educacionService.delete(id_edu).subscribe(
        data => {
          this.toastr.success('Experiencia Eliminada', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.cargarEducaciones();
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
