
import { Conexiones, Mensajes } from "../models/interfaces";
import { Crud } from "../models/crud";
import { Socket } from "socket.io";
const moment = require('moment');


class Chat {
    crudChats: Crud;
    crudGrupos: Crud;
    crudUsuariosGrupos: Crud;
    crudMensajes: Crud;
    crudConexiones: Crud;

    mensajes: Mensajes[] = new Array();
    app: any;
    io: any;
    statusRepetido: any;
    constructor() {
        this.crudChats = new Crud();
        this.crudChats.init("chats", "id");
        this.crudGrupos = new Crud();
        this.crudGrupos.init("grupos", "id");
        this.crudUsuariosGrupos = new Crud();
        this.crudUsuariosGrupos.init("usuariosgrupos", "id");
        this.crudMensajes = new Crud();
        this.crudMensajes.init("mensajes", "id");
        this.crudConexiones = new Crud();
        this.crudConexiones.init("conexiones", "id");
    }

    init(app: any, io: any) {
        this.app = app;
        this.io = io;
    }
    mensajear() {
        let clients: any [] = new Array();
        this.io.of("/").on("connect", async (socket: Socket) => {
            console.log("nuevo usuario id: ");
            console.log(socket.id);
            
            
            socket.on('send-conexion', async (data: Conexiones) => {
                console.log("mensajes conexion:");
                
                this.statusRepetido = false;
                clients.forEach(element => {
                   if(element[socket.id].id === socket.id) {
                    this.statusRepetido = true
                   }
               });
               if(!this.statusRepetido){
                clients.push({ [socket.id] : socket });
               }
                console.log(clients);
                data.idsocket = socket.id;
                let date = moment().format('YYYY-MM-DD')
                data.fecha = date;
                let bdConexiones = await this.crudConexiones.insert(data);

                clients.forEach(element => {
                    element[socket.id].emit('event-conexion', "conexion establecida");
               });
               //clients[socket.id].emit('event-conexion', "conexion establecida");
                
            })

            socket.on('send-message-all', async (grupo: number) => {
                console.log("enviar todos los mensajes:");

                this.mensajes = await this.crudMensajes.selectEdit(
                    "m.id, m.nombre, m.mensaje",
                    "mensajes m, chats c",
                    "c.grupo = " + grupo + " AND m.id = c.mensaje"
                );


                socket.to(socket.id).emit('text-event', this.mensajes);
                //socket.emit('text-event', this.mensajes); 
            })


            /*
                    socket.on('send-message', async (data: socketsMensajes ) =>{
                        console.log("mensaje recibido: ");
                        console.log(data);
                        let result = await this.crudChat.insert(data);
                        console.log(result);
                        this.mensajes.push(data);
                        socket.emit('text-event', this.mensajes);  
                        socket.broadcast.emit('text-event', this.mensajes);
                    })
                    */
        })
    }
}

export const chat = new Chat(); 
