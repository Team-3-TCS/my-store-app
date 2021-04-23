import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Detalle_Compra } from '../models/detalle_compra.models';

import { Producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart = new BehaviorSubject<Detalle_Compra[]>([]);
  public currentDataCart$ = this.cart.asObservable();

  constructor() {}
  public changeCart(newData: Detalle_Compra) {
    //Obtenemos el valor actual
    let listCart = this.cart.getValue();
    //Si no es el primer item del carrito
    if (listCart) {
      //Buscamos si ya cargamos ese item en el carrito
      let objIndex = listCart.findIndex(
        (obj) => obj.producto == newData.producto
      );
      //Si ya cargamos uno aumentamos su cantidad
      if (objIndex != -1) {
        listCart[objIndex].cantidad += 1;
      }
      //Si es el primer item de ese tipo lo agregamos derecho al carrito
      else {
        listCart.push(newData);
      }
      localStorage.setItem('list', JSON.stringify(listCart));
    }
    //Si es el primer elemento lo inicializamos
    else {
      listCart = [];
      listCart.push(newData);
      localStorage.setItem('list', JSON.stringify(listCart));
    }
    this.cart.next(listCart); //Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
  }
  public removeElementCart(newData: Producto) {
    //Obtenemos el valor actual de carrito
    let listCart = this.cart.getValue();
    //Buscamos el item del carrito para eliminar
    let objIndex = listCart.findIndex((obj) => obj.producto == newData.id);
    if (objIndex != -1) {
      //Seteamos la cantidad en 1 (ya que los array se modifican los valores por referencia, si vovlemos a agregarlo la cantidad no se reiniciará)
      listCart[objIndex].cantidad = 1;
      //Eliminamos el item del array del carrito
      listCart.splice(objIndex, 1);
    }

    this.cart.next(listCart); //Enviamos el valor a todos los Observers que estan escuchando nuestro Observable
    localStorage.setItem('list', JSON.stringify(listCart));
  }
  delete(products: Producto, productos: Producto[]) {
    for (let i = 0; i < productos.length; i++) {
      if (products.id === productos[i].id) {
        productos.splice(i, 1);
        localStorage.setItem('list', JSON.stringify(productos));
      }
    }
  }
  monto(valor) {
    if (localStorage.getItem('list')) {
      let getCartDetails = JSON.parse(localStorage.getItem('list'));
      valor = getCartDetails.reduce(function (acc, val) {
        return acc + val.precio * val.cantidad;
      }, 0);
    }
  }
  totalSubject = new Subject<any>();
  valor = new Subject<any>();
}
