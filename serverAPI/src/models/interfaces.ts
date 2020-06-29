export interface Usuarios {
    id?: number;
    nombre: string;
    correo: string;
    contra: string;
    telefono: string;
}

export interface Contactos {
    id?: number;
    nombre: string;
    telefono: string;
    correo: string;
    fecha: string;
    usuario: number;
}
export interface RequestGrupos{
    id?: number;
    nombre: string;
    usuarios: number[];
}
export interface ResponseGrupos{
    id: number;
    nombre: string;
    tipo: string;
}
export interface RequestUsuariosGrupos{
    grupo: number;
    usuario: number;
}

export interface Mensajes{
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