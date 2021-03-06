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
exports.usuariosModels = void 0;
const crud_1 = require("./crud");
class UsuariosModels {
    constructor() {
        this.crudU = new crud_1.Crud();
        this.crudU.init("usuarios", "id");
    }
    //metodo para seleccionar varios o un solo registro en la tabla usuario de la la base de datos
    select(id, correo) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                const result = yield this.crudU.select(id);
                console.log(result);
                return result;
            }
            else {
                if (correo) {
                    const result = yield this.crudU.selectNombre("correo", correo);
                    console.log(result);
                    return result;
                }
                else {
                    const result = yield this.crudU.select();
                    console.log(result);
                    return result;
                }
            }
        });
    }
    //metodo para insertar registro en la tabla usuario de la base de datos
    insert(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resultExiste = yield this.crudU.selectNombre("correo", usuario.correo);
                if (resultExiste.length === 0) {
                    const result = yield this.crudU.insert(usuario);
                    console.log(result.insertId);
                    if (result.warningCount === 0) {
                        return result.insertId;
                    }
                    else {
                        return false;
                    }
                }
                else
                    return false;
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
    //metodo para actualizar un registro en la tabla usuario de la base de datos
    update(id, usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.crudU.update(usuario, id);
                console.log(result);
                if (result.affectedRows === 1) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
    //metodo para eliminar un registro en la tabla usuario de la base de datos
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contElimi = yield this.crudU.deleteNombre("usuario", id);
                console.log("contactos eliminados");
                console.log(contElimi);
                const result = yield this.crudU.delete(id);
                console.log(result);
                if (result.affectedRows === 1) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (error) {
                console.log(error);
                return false;
            }
        });
    }
}
exports.usuariosModels = new UsuariosModels();
