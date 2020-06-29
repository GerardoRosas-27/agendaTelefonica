import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Grupos } from 'src/app/models/grupos';

@Component({
  selector: 'app-modal-grupos',
  templateUrl: './modal-grupos.component.html',
  styleUrls: ['./modal-grupos.component.css']
})
export class ModalGruposComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<ModalGruposComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Grupos) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    console.log("contactos recibidos");
    console.log(this.data);
  }

}
