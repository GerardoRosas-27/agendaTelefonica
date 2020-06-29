import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grupos } from '../models/grupos';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getContactos() {
    return this.http.get<any>(this.URL + '/contactos');
  }
  postContactos(data: Grupos) {
    return this.http.post<any>(this.URL + '/contactos', data);
  }
  deleteContactos(id: number) {
    return this.http.delete<any>(this.URL + '/contactos/'+ id );
  }
  putContactos(id: number, data: Grupos) {
    return this.http.put<any>(this.URL + '/contactos/'+ id, data );
  }
}
