import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { producto } from '../models/producto.models';

import {Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {
   private products:producto[]=[];
   private cart =new BehaviorSubject<producto[]>([]);
   cart$=this.cart.asObservable();

  constructor() { }
  addCart(producto:producto){
    this.products=[...this.products,producto];
    this.cart.next(this.products);
  }
  public cartSubject=new Subject<any>();
}
