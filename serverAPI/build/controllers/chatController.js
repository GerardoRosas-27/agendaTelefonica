"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chat = void 0;
const crud_1 = require("../models/crud");
const moment = require('moment');
class Chat {
    constructor() {
        this.mensajes = new Array();
        this.crudChats = new crud_1.Crud();
        this.crudChats.init("chats", "id");
        this.crudGrupos = new crud_1.Crud();
        this.crudGrupos.init("grupos", "id");
        this.crudUsuariosGrupos = new crud_1.Crud();
        this.crudUsuariosGrupos.init("usuariosgrupos", "id");
        this.crudMensajes = new crud_1.Crud();
        this.crudMensajes.init("mensajes", "id");
        this.crudConexiones = new crud_1.Crud();
        this.crudConexiones.init("conexiones", "id");
    }
    init(app, io) {
        this.app = app;
        this.io = io;
    }
    mensajear() {
        
        this.io.of("/").on("connect", (socket) => __awaiter(this, void 0, void 0, function* () {
            console.log("nuevo usuario id: ");
            console.log(socket.id);
            let clients = new Array();
            socket.on('send-conexion', (data) => __awaiter(this, void 0, void 0, function* () {
                console.log("mensajes conexion:");
                console.log(clients);
                if(clients.length === 0){
                    console.log("entro inserta uno nuevo");
                    clients.push({ [socket.id]: socket });
                }else{
                    this.statusRepetido = false;
                    console.log("entro ya hay");
                    clients.forEach(element => {
                        console.log(element);
                        if (element[socket.id].id === socket.id) {
                            this.statusRepetido = true;
                        }
                    });
                    if (!this.statusRepetido) {
                        clients.push({ [socket.id]: socket });
                    }
                }
               
                console.log(clients);
                data.idsocket = socket.id;
                let date = moment().format('YYYY-MM-DD');
                data.fecha = date;
                let bdConexiones = yield this.crudConexiones.insert(data);
                clients.forEach(element => {
                    element[socket.id].emit('event-conexion', "conexion establecida");
                });
                //clients[socket.id].emit('event-conexion', "conexion establecida");
            }));
            socket.on('send-message-all', (grupo) => __awaiter(this, void 0, void 0, function* () {
                console.log("enviar todos los mensajes:");
                this.mensajes = yield this.crudMensajes.selectEdit("m.id, m.nombre, m.mensaje", "mensajes m, chats c", "c.grupo = " + grupo + " AND m.id = c.mensaje");
                socket.to(socket.id).emit('text-event', this.mensajes);
                //socket.emit('text-event', this.mensajes); 
            }));
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
        }));
    }
}
exports.chat = new Chat();
