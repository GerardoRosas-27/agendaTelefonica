import { Contactos } from "./interfaces";
import { Crud } from "./crud";

class ContactosModels {
    crudC: Crud;
    constructor() {
        this.crudC = new Crud();
        this.crudC.init("contactos", "id");
    }
    //metodo para seleccionar varios o un solo registro en la tabla usuario de la la base de datos
    async select(id?: string, nombre?: string | number) {
        let result: any;
        if (id) {
            result = await this.crudC.select(id);
            console.log(result);
            return result;
        } else {
            if (nombre) {
                result = await this.crudC.selectNombre("usuario", nombre);
                console.log(result);
                return result;
            } else {
                result = await this.crudC.select();
                console.log(result);
                return result;
            }
        }
    }
    //metodo para insertar registro en la tabla usuario de la base de datos
    async insert(contactos: Contactos) {
        try {

            const result = await this.crudC.insert(contactos);
            console.log(result);
            if (result.affectedRows === 1) {
                return true
            } else {
                return false;
            }

        } catch (error) {
            console.log(error);
            return false
        }
    }
    //metodo para actualizar un registro en la tabla usuario de la base de datos
    async update(id: number, contactos: Contactos) {
        try {
            const result = await this.crudC.update(contactos, id);
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
            const result = await this.crudC.delete(id);
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
export const contactosModels = new ContactosModels();