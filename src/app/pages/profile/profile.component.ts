import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Persona } from 'src/app/core/models/persona.model';

export interface ItemsData{
  viewValue: string;
}

export interface DialogData{
  nom: string;
  apPat: string;
  apMat: string;
  celular: string;
  correo: string;
  usuario: string;
  document: string;
  viewValue: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public perfil: Persona ={
    nombre:"Jose",
    apellido_paterno:"Perez",
    apellido_materno:"Luna",
    celular:"999 999 999",
    correo:"user@mail.com",
    userString:"userMyStore123",
    document:"77777777"
  };
  dataItems: ItemsData[]=[
    {viewValue:"Usuario"},
    {viewValue:"E-mail"},
    {viewValue:"Nombre"},
    {viewValue:"Apellido Paterno"},
    {viewValue:"Apellido Materno"},
    {viewValue:"Documento"},
    {viewValue:"Telefono"}
  ];
  constructor(public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
  }

  

  openDialog(x:string):void{
    const dialogRef = this.dialog.open(ProfileDialog, {
      width: 'auto',
      data: {
        nom: this.perfil.nombre,
        apPat: this.perfil.apellido_paterno,
        apMat: this.perfil.apellido_materno,
        celular: this.perfil.celular,
        correo: this.perfil.correo,
        usuario: this.perfil.userString,
        document: this.perfil.document,
        viewValue:x
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      
        if(result!=undefined)
          this.agregar(result);
    });
  }

  agregar(result){
    this.perfil.nombre = result.nom;
    this.perfil.userString = result.usuario;
    this.perfil.apellido_paterno = result.apPat;
    this.perfil.apellido_materno=result.apMat;
    this.perfil.document=result.document;
    this.perfil.celular=result.celular;
    this.perfil.correo=result.correo;
    console.log(result.nom);
  }

}

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
})

export class ProfileDialog implements OnInit{
  
  constructor(
    public dialogRef: MatDialogRef<ProfileDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData){

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog(){
    this.dialogRef.close(this.data.nom);
  }

  stringCompare(x){
    if(this.data.viewValue==x)
      return true;
  }

  ngOnInit(){
    console.log(this.data.viewValue);
  }
}
