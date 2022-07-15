import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombre = '';
  titulo = '';
  isLogged = false;

  constructor(private portfolioService:PortfolioService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.portfolioService.obtenerDatos().subscribe(
      data => {
        this.nombre=data.nombre;
        this.titulo=data.titulo;
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
