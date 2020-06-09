import { Component, OnInit, Input } from '@angular/core';
import { Contactos } from 'src/app/models/contactos';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
@Input() contactos: Contactos[];
  constructor() { }

  ngOnInit() {
    console.log("contacto recibido:")
    console.log(this.contactos);
  }

}
