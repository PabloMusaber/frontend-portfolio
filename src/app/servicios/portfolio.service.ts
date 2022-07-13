import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Portfolio } from '../model/portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  portfolioURL = 'http://localhost:8080/portfolio/';

  constructor(private httpClient:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.httpClient.get<Portfolio[]>(this.portfolioURL + 'data');
  }

  public update(portfolio: Portfolio): Observable<any> {
    return this.httpClient.put<any>(this.portfolioURL + 'editar-data', portfolio);
  }

}
