import pool from "../database";
import { Usuarios } from "./interfaces";
import { Crud } from "./crud";

class UsuariosModels {
    crudU: Crud;
    constructor(){
        this.crudU = new Crud();
        this.crudU.init("usuarios", "id");
    }
    //metodo para seleccionar varios o un solo registro en la tabla usuario de la la base de datos
    async select(id: string | undefined, correo: string | undefined) {
        if (id) {
            const result = await this. crudU.select(id);
            console.log(result);
            return result;
        } else {
            if (correo) {
                const result = await this.crudU.selectNombre("correo", correo);
                console.log(result);
                return result;
            } else {
                const result = await this.crudU.select();
                console.log(result);
                return result;
            }
        }
    }
    //metodo para insertar registro en la tabla usuario de la base de datos
    async insert(usuario: Usuarios) {
        try {
            const resultExiste = await this.crudU.selectNombre("correo", usuario.correo );
            if (resultExiste.length === 0) {
                const result = await this.crudU.insert(usuario);
                console.log(result.insertId);
                if (result.warningCount === 0) {
                    return result.insertId
                } else {
                    return false;
                }
            } else return false
        } catch (error) {
            console.log(error);
            return false
        }
    }
    //metodo para actualizar un registro en la tabla usuario de la base de datos
    async update(id: number, usuario: Usuarios) {
        try {
            const result = await this.crudU.update(usuario, id);
            console.log(result)
            if (result.affectedRows === 1) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            return false
        }
    }
    //metodo para eliminar un registro en la tabla usuario de la base de datos
    async delete(id: number) {
        try {
            const contElimi = await this.crudU.deleteNombre("usuario", id);
            console.log("contactos eliminados");
            console.log(contElimi);
            const result = await this.crudU.delete(id);
            console.log(result);
            if (result.affectedRows === 1) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            return false
        }
    }

}

export const usuariosModels = new UsuariosModels(); 