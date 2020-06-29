import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalGruposComponent } from '../modal-grupos/modal-grupos.component';
import { Grupos } from 'src/app/models/grupos';
import { Mensaje } from 'src/app/models/mensajes';
import { EliminarContactoComponent } from '../eliminar-contacto/eliminar-contacto.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  @Input() contactos: Grupos[];
  @Output() eliminado: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() editado: EventEmitter<boolean> = new EventEmitter<boolean>();
  
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
    editarContacto(grupo: Grupos){
      console.log(grupo);
      grupo.titulo = "Editar Contacto"
      const dialogRef = this.dialog.open(ModalGruposComponent, {
        width: 'auto',
        data: grupo
      });
  
      dialogRef.afterClosed().subscribe(
        result => {
          console.log('resultado del modal: ');
          console.log(result);
          if(result){
            const { id } = grupo;
            delete grupo.id;
            delete grupo.titulo;
           
            this.contactosService.putContactos(id, grupo ).subscribe((result: Mensaje) =>{
              console.log(result.mensaje);
              console.log("enviado: true");
              this.editado.emit(true);
            })
            
          }else{
            console.log("sin eliminar");
          }
        });
    }
    
}

