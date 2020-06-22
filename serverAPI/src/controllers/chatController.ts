
import { socketsMensajes } from "../models/socketMensajes";
import { Crud } from "../models/crud";


class Chat {
    crudChat: Crud;
    mensajes: socketsMensajes[] = new Array();
    app: any;
    io: any;
    constructor(){
        this.crudChat = new Crud();
        this.crudChat.init("chat", "id");

    }
    init(app: any, io: any ){
        this.app = app;
        this.io = io;
    }
    mensajear(){
        this.io.of("/").on("connect", async (socket: any ) =>{
            console.log("nuevo usuario id: ");
            console.log(socket.id);
    
            socket.on('send-message-all', async () =>{
                console.log("enviar todos los mensajes:");
                this.mensajes = await this.crudChat.select();
                socket.emit('text-event', this.mensajes);  
            })
    
            socket.on('send-message', async (data: socketsMensajes ) =>{
                console.log("mensaje recibido: ");
                console.log(data);
                let result = await this.crudChat.insert(data);
                console.log(result);
                this.mensajes.push(data);
                socket.emit('text-event', this.mensajes);  
                socket.broadcast.emit('text-event', this.mensajes);
            })
        })
    }
}
import { format } from "morgan";

export const chat = new Chat(); 
