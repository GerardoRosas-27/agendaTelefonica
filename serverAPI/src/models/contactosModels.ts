import { Contactos, RequestUsuariosGrupos, RequestGrupos } from "./interfaces";
import { Crud } from "./crud";

class ContactosModels {
    crudC: Crud;
    crudUsuariosGrupos: Crud;
    constructor() {
        this.crudC = new Crud();
        this.crudC.init("grupos", "id");
        this.crudUsuariosGrupos = new Crud();
        this.crudUsuariosGrupos.init("usuariosgrupos", "id");
    }
    //metodo para seleccionar varios o un solo registro en la tabla usuario de la la base de datos
    async select(id?: number, usuario?: number) {
        let result: any;
        if (id) {
            result = await this.crudC.select(id);
            console.log(result);
            return result;
        } else {
            result = await this.crudC.selectEdit(
                "g.id, g.nombre, g.tipo",
                "grupos g, usuariosgrupos ug",
                "ug.usuario = "+ usuario +" AND g.id = ug.grupo"
                );
                console.log(result);
           return result;
        }
    }
    //metodo para insertar registro en la tabla usuario de la base de datos
    async insert(grupos: RequestGrupos) {
        let status: boolean = false;
        try {
            let usuarios: number[] = grupos.usuarios;
            delete grupos.usuarios;
            const result = await this.crudC.insert(grupos);
            console.log(result);
            
          for (const item of usuarios) {
              let usuariosGupos: RequestUsuariosGrupos ={
                  grupo: result.insertId,
                  usuario: item
              }
            let respuesta = await this.crudUsuariosGrupos.insert(usuariosGupos);
            if (respuesta.affectedRows === 1) {
                status = true;
            } else {
                status = false;
            }
          }
            if (status) {
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