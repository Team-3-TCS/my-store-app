import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/core/models/producto.models';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  productos: Producto[] = []
  total: number = 0
  constructor() { }

  ngOnInit(): void {
    this.getData()

  }
  getData() {//Recibimos informacion del LocalStorage
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
}
