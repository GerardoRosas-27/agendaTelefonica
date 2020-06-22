import { Injectable } from '@angular/core';
import * as io from "socket.io-client";
import { Observable, Subscriber } from 'rxjs';
import { SocketsMensajes } from '../models/mensajes';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  urlServer: string = "http://localhost:3000";
  socket: any; 

  constructor() { 
    this.socket = io(this.urlServer);
  }
  listem(eventName: string){
    return new Observable((Subscriber) =>{
      this.socket.on(eventName, (data) =>{
        Subscriber.next(data);
      })
    });
  }
  emit(eventName: string, data: any){
    this.socket.emit(eventName, data);
  }
}
