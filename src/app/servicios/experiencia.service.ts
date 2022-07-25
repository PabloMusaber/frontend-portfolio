import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  experienciaURL = environment.experienciaURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<any> {
    return this.httpClient.get<Experiencia[]>(this.experienciaURL + 'ver');
  }

  public save(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.experienciaURL + 'new', experiencia);
  }

  public update(experiencia: Experiencia, id:number): Observable<any> {
    return this.httpClient.put<any>(this.experienciaURL + 'editar/' + id, experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.experienciaURL + `delete/${id}`);
  }

}
