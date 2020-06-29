export interface Mensaje{
    tipo: string;
    mensaje: string;
}

export interface SocketsMensajes{
    grupo?: number;
    id?: number;
    nombre: string;
    mensaje: string;
}
export interface Conexiones{
    usuario: number;
    idsocket?: string;
    fecha?: Date;
}
