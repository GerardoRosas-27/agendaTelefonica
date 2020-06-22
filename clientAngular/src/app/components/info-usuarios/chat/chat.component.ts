import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SocketsMensajes } from 'src/app/models/mensajes';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() mensajesRecibidos: SocketsMensajes[];
  @Output() dataMensaje: EventEmitter<SocketsMensajes> = new EventEmitter<SocketsMensajes>();
  enviarMensaje: SocketsMensajes;
  constructor() { }

  ngOnInit() {
    this.enviarMensaje = {
      usuario: '',
      mensaje: ''
    }
    console.log(this.mensajesRecibidos);
  }
  onEnviarMensaje(){
    this.dataMensaje.emit(this.enviarMensaje);
  }

}
