import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UsuariosService } from "../../services/usuarios.service";
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { ContactosService } from 'src/app/services/contactos.service';
import { Grupos } from 'src/app/models/grupos';
import { MatDialog } from '@angular/material/dialog';
import { Mensaje, SocketsMensajes, Conexiones } from 'src/app/models/mensajes';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ModalGruposComponent } from './modal-grupos/modal-grupos.component';


@Component({
  selector: 'app-info-usuarios',
  templateUrl: './info-usuarios.component.html',
  styleUrls: ['./info-usuarios.component.css']
})
export class InfoUsuariosComponent implements OnInit {
  statusContactos: boolean = false;
  contactos: Grupos[] = new Array();
  usuarios: Usuario ={
    nombre: '',
    correo: ''
  };
  statusChat: boolean = false;

  mensajesRecibidos: SocketsMensajes[];


  constructor(private usuarioService: UsuariosService,
    private router: Router,
    private contactosService: ContactosService,
    public dialog: MatDialog,
    private websocketService: WebsocketService) { }

  ngOnInit() { 
    this.getGrupos();
    this.usuarioService.getPerfil()
      .subscribe(
        res => {
          this.usuarios = res[0];
          console.log(res);
          this.getConexion();
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
  getConexion() {
    let conexion: Conexiones = {
      usuario: this.usuarios.id
    }
    console.log('solicitar conexion:');
    console.log(conexion);
    this.websocketService.emit("send-conexion", conexion);
    this.websocketService.listem("event-conexion").subscribe(
      (data: any) => {
        console.log('conexion recivida:');
        console.log(data);
      });
  }

  getMensajesChat() {
    console.log("entro solo una ves getMansajes");
    this.mensajesRecibidos = [];
    let mensaje: SocketsMensajes;
    mensaje.nombre = this.usuarios.nombre;
    this.websocketService.emit("send-message-all", '');
    this.websocketService.listem("text-event").subscribe(
      (data: SocketsMensajes[]) => {
        console.log('mensajes recibidos:');
        console.log(data);
        this.mensajesRecibidos = data;
      });
  }

  onEnviarMensaje(mensaje: SocketsMensajes) {
    mensaje.nombre = this.usuarios.nombre;
    console.log('enviar mensaje:');
    console.log(mensaje);
    this.websocketService.emit("send-message", mensaje);
    //this.mensajesRecibidos.push(mensaje);
  }


  getGrupos() {

    this.contactosService.getContactos().subscribe(
      (res: Grupos[]) => {
        console.log("contactos:");
        console.log(res);
        this.contactos = res;
        this.statusContactos = true;
      }
    )
  }


  crearContacto(): void {
    let grupo: Grupos={
      titulo: "Nuevo contacto",
      nombre: '',
      tipo: 'contacto'
    }
    const dialogRef = this.dialog.open(ModalGruposComponent, {
      width: '650px',
      data: grupo
    });

    dialogRef.afterClosed().subscribe(
      (result: Grupos) => {
        console.log('resultado del modal: ');
        console.log(result);
        if (result.nombre) {
          delete result.titulo;
          result.usuarios = [1,2];
          this.contactosService.postContactos(result).subscribe(
            (result: Mensaje) => {
              console.log(result.mensaje);
              this.getGrupos();
            });
        }
      });
  }
  onEliminado(eliminar: boolean) {
    console.log(eliminar);
    if (eliminar) {
      this.getGrupos();
    }
  }
  onEditado(editado: boolean) {
    console.log(editado);
    if (editado) {
      this.getGrupos();
    }
  }
}
