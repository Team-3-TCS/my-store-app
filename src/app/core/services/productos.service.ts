import { Injectable } from '@angular/core';
import { product } from 'src/app/mock/product.mock';
import { Producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private datos: Producto[] = product;
  constructor() {}
  getProducts() {
    return this.datos;
  }
}