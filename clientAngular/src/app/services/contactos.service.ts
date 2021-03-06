import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contactos } from '../models/contactos';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getContactos() {
    return this.http.get<any>(this.URL + '/contactos');
  }
  postContactos(data: Contactos) {
    return this.http.post<any>(this.URL + '/contactos', data);
  }
  deleteContactos(id: number) {
    return this.http.delete<any>(this.URL + '/contactos/'+ id );
  }
  putContactos(id: number, data: Contactos) {
    return this.http.put<any>(this.URL + '/contactos/'+ id, data );
  }
}
