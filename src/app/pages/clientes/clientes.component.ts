import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
   
  constructor(public productosService:ProductosService) { }

  ngOnInit(): void {
  }
  obtenerProductos(){
    return this.productosService.getProducts();
  }

}
