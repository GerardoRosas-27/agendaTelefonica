import express, { Application } from "express";

export default class Server {
    public app: Application;

    constructor(private port :number) {
        this.app = express();
    }
    static init(port: number): Server {
        return new Server(port);
    }

}