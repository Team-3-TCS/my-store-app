import {FormControl} from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/core/models/order.models';
import { MensajeConfirmacionComponent } from 'src/app/shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { OrdersService } from '../../../services/orders.service';
import { numberFormat } from 'highcharts';

@Component({
  selector: 'app-orders-agent',
  templateUrl: './orders-agent.component.html',
  styleUrls: ['./orders-agent.component.css']
})
export class OrdersAgentComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<Order>;

  selection = new SelectionModel<Order>(true, []);

  static edit: boolean = false;
  static id: number = 0;
  datos: Order[] = [];

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private ordersService: OrdersService,
    
  ) {

    this.datos = this.ordersService.getOrders();
    this.dataSource = new MatTableDataSource(this.datos);

  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  columns: string[] = ['select', 'idPurchase', 'idClient', 'idSeller', 'idStatusPurchase','idStatusPayment','deliveryTipe','discount','acciones'];

  date1 = new FormControl(new Date());
  date2 = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  
  viewOrders(status:number){
    this.datos = []
    this.dataSource = new MatTableDataSource(this.datos);    
    if(status == -1){
      this.datos = this.ordersService.getOrders();
      this.dataSource = new MatTableDataSource(this.datos);
    }else{
      this.datos = this.ordersService.getOrdersStatus(status);
      this.dataSource = new MatTableDataSource(this.datos);
    }
  }

  logChange(index:number){
    console.log(index);
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

  checkboxLabel(row?: Order): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.idPurchase
    }`;
  }


}
