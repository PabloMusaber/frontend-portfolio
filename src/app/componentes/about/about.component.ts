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
  imagen = 'https://firebasestorage.googleapis.com/v0/b/newfront-f82e0.appspot.com/o/images%2Fnull.png?alt=media&token=15b33532-8656-4f0d-89eb-7112adef6432';
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
