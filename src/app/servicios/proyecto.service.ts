import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proyectoURL = environment.proyectoURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<any> {
    return this.httpClient.get<Proyecto[]>(this.proyectoURL + 'ver');
  }

  public save(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.proyectoURL + 'new', proyecto);
  }

  public update(proyecto: Proyecto, id:number): Observable<any> {
    return this.httpClient.put<any>(this.proyectoURL + 'editar/' + id, proyecto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.proyectoURL + `delete/${id}`);
  }

}
