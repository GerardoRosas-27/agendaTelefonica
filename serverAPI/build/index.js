"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = __importDefault(require("./server/server"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const usuariosRoutes_1 = require("./routes/usuariosRoutes");
const contactosRoutes_1 = require("./routes/contactosRoutes");
const chatController_1 = require("./controllers/chatController");
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
//----crear el servidor de express
const expresServer = server_1.default.init(port);
//---unir el servidor express al serverHttp
const serverHttp = http_1.default.createServer(expresServer.app);
//----Unir el serverHttp al socket.io
const io = socket_io_1.default.listen(serverHttp);
//----- logica del socket
chatController_1.chat.init(expresServer.app, io);
chatController_1.chat.mensajear();
//---config server
expresServer.app.use(morgan_1.default("dev"));
expresServer.app.use(cors_1.default());
expresServer.app.use(express_1.default.json());
expresServer.app.use(express_1.default.urlencoded({ extended: false }));
//-- middlewares de la cabecera
expresServer.app.use((req, res, next) => {
    // Dominio que tengan acceso (ej. 'http://example.com')
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Metodos de solicitud que deseas permitir
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // Encabecedados que permites (ej. 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});
expresServer.app.use('', usuariosRoutes_1.usuariosR.router);
expresServer.app.use('', contactosRoutes_1.contactosR.router);
serverHttp.listen(port, () => {
    console.log("servidor coriendo en el puerto: " + port);
});
