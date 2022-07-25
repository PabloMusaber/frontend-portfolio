import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDTO } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.authURL;

  constructor(private httpClient: HttpClient) { }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO>{
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }

  public refresh(dto: JwtDTO): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'refresh', dto);
  }

}
