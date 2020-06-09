import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getContactos() {
    return this.http.get<any>(this.URL + '/contactos');
  }
}
