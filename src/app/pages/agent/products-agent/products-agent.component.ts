import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductosService } from 'src/app/core/services/productos.service';
import { MensajeConfirmacionComponent } from 'src/app/shared/mensaje-confirmacion/mensaje-confirmacion.component';
//datos de prueba
@Component({
  selector: 'app-products-agent',
  templateUrl: './products-agent.component.html',
  styleUrls: ['./products-agent.component.css'],
})
export class ProductsAgentComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public productsService: ProductosService
  ) {}

  ngOnInit(): void {}
  columnas: string[] = [
    'codigo',
    'idCategoria',
    'nombre',
    'descripcion',
    'precio',
    'stock',
    'modificar',
    'eliminar',
  ];
  dataSource = this.productsService.getProducts();

  eliminar(): void {
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: { mensaje: 'Esta seguro que desea eliminar el Producto?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'aceptar') {
        this.snackBar.open('El producto fue eliminado con exito!', '', {
          duration: 3000,
        });
      }
    });
  }
}
