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
exports.contactosModels = void 0;
const crud_1 = require("./crud");
class ContactosModels {
    constructor() {
        this.crudC = new crud_1.Crud();
        this.crudC.init("contactos", "id");
    }
    //metodo para seleccionar varios o un solo registro en la tabla usuario de la la base de datos
    select(id, nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            if (id) {
                result = yield this.crudC.select(id);
                console.log(result);
                return result;
            }
            else {
                if (nombre) {
                    result = yield this.crudC.selectNombre("usuario", nombre);
                    console.log(result);
                    return result;
                }
                else {
                    result = yield this.crudC.select();
                    console.log(result);
                    return result;
                }
            }
        });
    }
    //metodo para insertar registro en la tabla usuario de la base de datos
    insert(contactos) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.crudC.insert(contactos);
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
    //metodo para actualizar un registro en la tabla usuario de la base de datos
    update(id, contactos) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.crudC.update(contactos, id);
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
                const result = yield this.crudC.delete(id);
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
exports.contactosModels = new ContactosModels();
