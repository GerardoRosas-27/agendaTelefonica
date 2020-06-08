import { Router } from "express";
import { contactosC } from "../controllers/contactosController";

class ContactosRoutes {
  public router: Router = Router();

  constructor() {
    this.configRoutes();
  }
  configRoutes(): void {
    this.router.get('/api/contactos', contactosC.keySecrect, contactosC.verificarToken, contactosC.getContactos);
    this.router.get('/api/contactos/:id', contactosC.getContacto);
    this.router.post('/api/contactos', contactosC.postContactos);
    this.router.delete('/api/contactos/:id', contactosC.deleteContactos);
    this.router.put('/api/contactos/:id', contactosC.putContactos);

  }
}
export const contactosR = new ContactosRoutes();
