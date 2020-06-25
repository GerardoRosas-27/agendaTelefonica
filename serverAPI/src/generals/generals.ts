import crypto from "crypto";
import { Crud } from "../models/crud";

class Generals {

    crudG: Crud;
    constructor() {
        this.crudG = new Crud();

    }
    async generaraID(tabla: string, id: string) {
        this.crudG.init(tabla, id);
        let nueva: boolean = false;
        let newID: string;
        do {
            newID = crypto.randomBytes(15).toString('hex');
            let result = await this.crudG.select(newID);
            if (result.lenght == 0) {
                nueva = true;
            }
        } while (nueva);
        return newID;
    }
    
}

export const general = new Generals();
