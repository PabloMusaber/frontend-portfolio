import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  constructor(private httpClient: HttpClient) { }

  habilidadURL = environment.habilidadURL;

  public lista(): Observable<any> {
    return this.httpClient.get<Habilidad[]>(this.habilidadURL + 'ver');
  }

  public buscar(id:number): Observable<any> {
    return this.httpClient.get<Habilidad>(this.habilidadURL + 'ver/' + id);
  }

  public save(habilidad: Habilidad): Observable<any> {
    return this.httpClient.post<any>(this.habilidadURL + 'new', habilidad);
  }

  public update(habilidad: Habilidad, id:number): Observable<any> {
    return this.httpClient.put<any>(this.habilidadURL + 'editar/' + id, habilidad);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.habilidadURL + `delete/${id}`);
  }

}
