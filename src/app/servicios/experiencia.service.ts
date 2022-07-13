import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  experienciaURL = 'http://localhost:8080/experiencia/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<any> {
    return this.httpClient.get<Experiencia[]>(this.experienciaURL + 'ver');
  }

  public save(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.experienciaURL + 'new', experiencia);
  }

  public update(experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.experienciaURL + 'editar', experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.experienciaURL + `delete/${id}`);
  }

}
