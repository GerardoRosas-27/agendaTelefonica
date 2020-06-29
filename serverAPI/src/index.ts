import express from "express";
import server from "./server/server";
import http from "http";
import SocketIo from "socket.io";
import morgan from "morgan";
import cors from "cors";
import { usuariosR } from "./routes/usuariosRoutes";
import { contactosR } from "./routes/contactosRoutes";
import { chat } from "./controllers/chatController";

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
//----crear el servidor de express
const expresServer = server.init(port);

//---unir el servidor express al serverHttp
const serverHttp = http.createServer(expresServer.app);

//----Unir el serverHttp al socket.io
const io = SocketIo.listen(serverHttp);


//----- logica del socket
chat.init(expresServer.app, io);
chat.mensajear();

//---config server
expresServer.app.use(morgan("dev"));
expresServer.app.use(cors());
expresServer.app.use(express.json());
expresServer.app.use(express.urlencoded({ extended: false }));
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

expresServer.app.use('', usuariosR.router);
expresServer.app.use('', contactosR.router);

serverHttp.listen(port, ()=>{
    console.log("servidor coriendo en el puerto: " + port);
});