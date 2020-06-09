import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contactos } from 'src/app/models/contactos';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { EliminarContactoComponent } from '../eliminar-contacto/eliminar-contacto.component';
import { ContactosService } from 'src/app/services/contactos.service';
import { Mensaje } from 'src/app/models/mensajes';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
@Input() contactos: Contactos[];
@Output() eliminado: EventEmitter<boolean> = new EventEmitter<boolean>();

colSize: number = 1;
 isMovil:boolean = false;
  constructor(brekPointObserrver: BreakpointObserver,
    public dialog: MatDialog,
    private contactosService: ContactosService) { 
    brekPointObserrver.observe([
      
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large
      
    ]).subscribe(resul =>{
         console.log(resul);
         console.log(resul.matches);
         if(resul.matches){
          this.colSize = 3;
         }else{
          this.colSize = 1;
         }
    });
    
  }



  ngOnInit() {
    console.log("contacto recibido:")
    console.log(this.contactos);
  }

  eliminarContacto(id: string, nombre: string): void {
    console.log(id);
    const dialogRef = this.dialog.open(EliminarContactoComponent, {
      width: 'auto',
      data:{ nombre: nombre }
    });

    dialogRef.afterClosed().subscribe(
      result => {
        console.log('resultado del modal: ');
        console.log(result);
        if(result){
          this.contactosService.deleteContactos(parseInt(id)).subscribe((result: Mensaje) =>{
            console.log(result.mensaje);
            console.log("enviado: true");
            this.eliminado.emit(true);
          })
          
        }else{
          console.log("sin eliminar");
        }
      });
  }
  

}
