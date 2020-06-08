import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getPerfil() {
    return this.http.get<any>(this.URL + '/perfil');
  }

}
