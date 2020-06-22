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
class Chat {
    constructor() {
        this.mensajes = new Array();
        this.crudChat = new crud_1.Crud();
        this.crudChat.init("chat", "id");
    }
    init(app, io) {
        this.app = app;
        this.io = io;
    }
    mensajear() {
        this.io.of("/").on("connect", (socket) => __awaiter(this, void 0, void 0, function* () {
            console.log("nuevo usuario id: ");
            console.log(socket.id);
            socket.on('send-message-all', () => __awaiter(this, void 0, void 0, function* () {
                console.log("enviar todos los mensajes:");
                this.mensajes = yield this.crudChat.select();
                socket.emit('text-event', this.mensajes);
            }));
            socket.on('send-message', (data) => __awaiter(this, void 0, void 0, function* () {
                console.log("mensaje recibido: ");
                console.log(data);
                let result = yield this.crudChat.insert(data);
                console.log(result);
                this.mensajes.push(data);
                socket.emit('text-event', this.mensajes);
                socket.broadcast.emit('text-event', this.mensajes);
            }));
        }));
    }
}
exports.chat = new Chat();
