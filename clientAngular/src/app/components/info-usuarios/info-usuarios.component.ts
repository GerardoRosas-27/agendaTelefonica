import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UsuariosService } from "../../services/usuarios.service";
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { ContactosService } from 'src/app/services/contactos.service';
import { Contactos } from 'src/app/models/contactos';
import { MatDialog } from '@angular/material/dialog';
import { CrearContactosComponent } from "./crear-contactos/crear-contactos.component"
import { Mensaje } from 'src/app/models/mensajes';

@Component({
  selector: 'app-info-usuarios',
  templateUrl: './info-usuarios.component.html',
  styleUrls: ['./info-usuarios.component.css']
})
export class InfoUsuariosComponent implements OnInit {
  statusContactos: boolean = false;
  contactos: Contactos[] = new Array();
  usuarios: Usuario[];
  constructor(private usuarioService: UsuariosService,
    private router: Router,
    private contactosService: ContactosService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getContactos();
    this.usuarioService.getPerfil()
      .subscribe(
        res => {
          this.usuarios = res;
          //alert("bienvenido " + this.usuarios[0].nombre);
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/signin']);
            }
          }
        }
      )
  }
  getContactos() {

    this.contactosService.getContactos().subscribe(
      (res: Contactos[]) => {
        console.log("contactos:");
        console.log(res);
        this.contactos = res;
        this.statusContactos = true;
      }
    )
  }


  crearContacto(): void {
    const dialogRef = this.dialog.open(CrearContactosComponent, {
      width: '650px',
      data: { name: "Nuevo contacto" }
    });

    dialogRef.afterClosed().subscribe(
      (result: Contactos) => {
        console.log('resultado del modal: ');
        console.log(result);
        if(result.nombre){
          this.contactosService.postContactos(result).subscribe(
            (result: Mensaje) =>{
            console.log(result.mensaje);
            this.getContactos();
          });
        }
      });
  }
  onEliminado(eliminar: boolean){
    console.log(eliminar);
    if(eliminar){
      this.getContactos();
    }
  }
  onEditado(editado: boolean){
    console.log(editado);
    if(editado){
      this.getContactos();
    }
  }
}
