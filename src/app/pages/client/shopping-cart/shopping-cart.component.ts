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
  constructor(public productosService: ProductosService) { }
  ngOnInit(): void {
    this.getData();
  }
  getData(){//Recibimos informacion del LocalStorage
    let getCartDetails
    if (localStorage.getItem('list')) {
      this.productos = JSON.parse(localStorage.getItem('list'));
      if (localStorage.getItem('list')) {
        getCartDetails = JSON.parse(localStorage.getItem('list'))
        this.total = getCartDetails.reduce(function (acc, val) {
          return acc + (val.precio * val.cantidad)
        }, 0)
      }
    }
  }
  increase(products) {//Incrementamos el valor de cantidad y almacenamos al LocalStorage
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].id === products.id) {
        this.productos[i].cantidad = parseInt(products.cantidad)+1
      }
    }
    localStorage.setItem('list', JSON.stringify(this.productos))
    if (localStorage.getItem('list')) {
      let getCartDetails = JSON.parse(localStorage.getItem('list'))
      this.total = getCartDetails.reduce(function (acc, val) {
        return acc + (val.precio * val.cantidad)
      }, 0)
    }
  }
  diminish(products) {//Dismiuir el valor de cantidad y almacenamos al LocalStorage
    if (products.cantidad != 1) {
      for (let i = 0; i < this.productos.length; i++) {
        if (this.productos[i].id === products.id) {
          this.productos[i].cantidad = parseInt(products.cantidad)-1
        }
      }
      localStorage.setItem('list', JSON.stringify(this.productos))
      if (localStorage.getItem('list')) {
        let getCartDetails = JSON.parse(localStorage.getItem('list'))
        this.total = getCartDetails.reduce(function (acc, val) {
          return acc + (val.precio * val.cantidad)
        }, 0)
      }
    }  
  }
  delete(products) {//eliminar del carrito el producto seleccionado
    for (let i = 0; i < this.productos.length; i++) {
      if (products.id === this.productos[i].id) {
        this.productos.splice(i, 1);
        localStorage.setItem('list', JSON.stringify(this.productos))
      }
    }
    if (localStorage.getItem('list')) {
      let getCartDetails = JSON.parse(localStorage.getItem('list'))
      this.total = getCartDetails.reduce(function (acc, val) {
        return acc + (val.precio * val.cantidad)
      }, 0)
    }
  }
}
