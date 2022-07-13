import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/model/portfolio';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name = '';
  title = '';
  isLogged = false;

  constructor(private portfolioService:PortfolioService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.portfolioService.obtenerDatos().subscribe(
      data => {
        this.name=data.name;
        this.title=data.title;
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
