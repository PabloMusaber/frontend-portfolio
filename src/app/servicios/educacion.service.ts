import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  educacionURL = environment.educacionURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<any> {
    return this.httpClient.get<Educacion[]>(this.educacionURL + 'ver');
  }

  public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.educacionURL + 'new', educacion);
  }

  public update(educacion: Educacion, id:number): Observable<any> {
    return this.httpClient.put<any>(this.educacionURL + 'editar/' + id, educacion);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.educacionURL + `delete/${id}`);
  }

}
