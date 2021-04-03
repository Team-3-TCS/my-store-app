import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/models/producto.models';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public compraTerminada = false;
  public productos: producto[] = [];
  columnas: string[] = ['codigo', 'descripcion', 'precio'];
  constructor(public productosService: ProductosService) { }
  public total() {
    let total = 0;
    this.productos.forEach(p => total += p.precio);
    return total;
  }
  ngOnInit(): void {

    if (localStorage.getItem("list")) {
      let list = JSON.parse(localStorage.getItem("list"));
      //	this.totalShoppingCart = list.length;
      this.productos = JSON.parse(localStorage.getItem("list"));
      this.productos = list;
    }
  }
}


