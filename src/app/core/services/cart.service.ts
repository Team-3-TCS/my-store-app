import { Injectable } from '@angular/core';
import {Subject } from 'rxjs'

import { Producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartSubject=new Subject<number>();
    constructor() {}
   addcart(products:Producto,valor){
    let count = 0;
    if (localStorage.getItem('list')) {
      let arrayList = JSON.parse(localStorage.getItem('list'));
      for (let i in arrayList) {
        if (products.id === arrayList[i].id) {
          arrayList[i].cantidad += 1;
        } else {
          count += 1;
        }
      }
      if (count === arrayList.length) {
        arrayList.push(products);
      } else {
        valor = count;
        valor -= 0;
      }
      localStorage.setItem('list', JSON.stringify(arrayList));
      valor = arrayList.length;
      this.cartSubject.next(valor);
    } else {
      let arrayList = [];
      arrayList.push(products);
      valor = arrayList.length;
      this.cartSubject.next(valor);
      localStorage.setItem('list', JSON.stringify(arrayList));
    }
  }
}
