import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Contactos } from 'src/app/models/contactos';

@Component({
  selector: 'app-crear-contactos',
  templateUrl: './crear-contactos.component.html',
  styleUrls: ['./crear-contactos.component.css']
})
export class CrearContactosComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CrearContactosComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Contactos) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    console.log("contactos recibidos");
    console.log(this.data);
  }

}
