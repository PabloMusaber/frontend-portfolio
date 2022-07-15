import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  introduccion = '';
  imagen = 'null.png';
  isLogged = false;

  constructor(
    private datosPortfolio:PortfolioService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    
    this.datosPortfolio.obtenerDatos().subscribe(
      data =>{
        this.introduccion=data.introduccion;
        this.imagen=data.imagen;
      },
      err => {
        console.log(err);
      });
      if(this.tokenService.getToken()){
        this.isLogged= true;
      }else{
        this.isLogged = false;
      }
  }

  goEdit(): void{
    document.location.href="/editar-data";
  }

}
