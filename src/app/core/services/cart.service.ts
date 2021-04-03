import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/producto.models';

import {Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Producto[] = [];
  private cart = new BehaviorSubject<Producto[]>([]);
  cart$ = this.cart.asObservable();

  constructor() {}
  addCart(producto: Producto) {
    this.products = [...this.products, producto];
    this.cart.next(this.products);
  }
  public cartSubject=new Subject<any>();
}
