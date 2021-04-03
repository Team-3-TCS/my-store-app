import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { producto } from 'src/app/models/producto.models';
import { MensajeConfirmacionComponent } from 'src/app/shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { MatTableDataSource } from '@angular/material/table';


//datos de prueba
@Component({
  selector: 'app-products-agent',
  templateUrl: './products-agent.component.html',
  styleUrls: ['./products-agent.component.css']
})
export class ProductsAgentComponent implements OnInit {
  
  static edit : boolean = false;
  static id : number = 0;
  datos: producto[] = [];
  data;
  dataSource;

  constructor(public dialog: MatDialog,public snackBar:MatSnackBar, private activatedRoute : ActivatedRoute,
              private productsService:ProductsService,
              private router:Router) { }
  
  ngOnInit(): void {
    this.datos = this.productsService.getProducts();
    this.data= Object.assign(this.datos);
    this.dataSource = new MatTableDataSource<producto>(this.data);
    this.dataSource = this.datos;
  }
  columnas: string[] = ['codigo', 'idCategoria', 'nombre', 'descripcion', 'precio', 'stock', 'modificar', 'eliminar'];
  
  agregar(){
    ProductsAgentComponent.edit = false;
  }
  
  editar(id:number):void{
    ProductsAgentComponent.edit = true;
    ProductsAgentComponent.id = id ;
    console.log(id, ProductsAgentComponent.id);
  }

  eliminar(id:number):void{
   
   const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
    width: '350px',
    data: {mensaje: 'Esta seguro que desea eliminar el Producto?'}
  });
  
  dialogRef.afterClosed().subscribe(result => {
    if(result=== 'aceptar'){
    this.data.splice(id,1);
    this.dataSource = new MatTableDataSource<producto>(this.data);
    this.snackBar.open('El producto fue eliminado con exito!','',{duration : 3000}); 
   }
  });
  }
}

    