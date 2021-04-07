import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/core/models/producto.models';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductosService } from 'src/app/core/services/productos.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  public productos: Producto[] = [];
  total: number = 0
  columnas: string[] = ['codigo', 'descripcion', 'unidad', 'total'];
  constructor(public productosService: ProductosService, private cartService: CartService) { }
  ngOnInit(): void {
    if (localStorage.getItem('list')) {
      this.productos = JSON.parse(localStorage.getItem('list'));
      this.mount()
    }
  }
  increase(products) {
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].id === products.id) {
        this.productos[i].cantidad = parseInt(products.cantidad)+1
      }
    }
    localStorage.setItem('list', JSON.stringify(this.productos))
    this.mount()
  }
  diminish(products) {
    if (products.cantidad != 1) {
      for (let i = 0; i < this.productos.length; i++) {
        if (this.productos[i].id === products.id) {
          this.productos[i].cantidad = parseInt(products.cantidad)-1
        }
      }
      localStorage.setItem('list', JSON.stringify(this.productos))
      this.mount()
    }
    
  }
  delete(products) {
    for (let i = 0; i < this.productos.length; i++) {
      if (products.id == this.productos[i].id) {
        this.productos.splice(i, 1);
        localStorage.setItem('list', JSON.stringify(this.productos))
      }
    }
  }
  getCartDetails: any = []
  mount() {
    if (localStorage.getItem('list')) {
      this.getCartDetails = JSON.parse(localStorage.getItem('list'))
      this.total = this.getCartDetails.reduce(function (acc, val) {
        return acc + (val.precio * val.cantidad)
      }, 0)
    }
  }
}
