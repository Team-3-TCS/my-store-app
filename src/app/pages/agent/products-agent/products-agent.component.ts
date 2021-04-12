import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/core/models/producto.models';
import { MensajeConfirmacionComponent } from 'src/app/shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-products-agent',
  templateUrl: './products-agent.component.html',
  styleUrls: ['./products-agent.component.css'],
})
export class ProductsAgentComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<Producto>;

  selection = new SelectionModel<Producto>(true, []);

  static edit: boolean = false;
  static id: number = 0;
  datos: Producto[] = [];

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.datos = this.productsService.getProducts();
    this.dataSource = new MatTableDataSource(this.datos);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  columns: string[] = ['select', 'nombre', 'precio', 'stock', 'acciones'];

  agregar() {
    ProductsAgentComponent.edit = false;
  }

  editar(id: number): void {
    ProductsAgentComponent.edit = true;
    ProductsAgentComponent.id = id;
    console.log(id, ProductsAgentComponent.id);
  }

  eliminar(id: number): void {
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: { mensaje: 'Esta seguro que desea eliminar el Producto?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'aceptar') {
        this.datos.splice(id, 1);
        this.dataSource = new MatTableDataSource<Producto>(this.datos);
        this.dataSource.paginator = this.paginator;
        this.snackBar.open('El producto fue eliminado con exito!', '', {
          duration: 3000,
        });
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  checkboxLabel(row?: Producto): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id
    }`;
  }
}
