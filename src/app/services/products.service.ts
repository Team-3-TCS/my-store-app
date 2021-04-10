import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Producto } from '../core/models/producto.models';
import { product } from '../mock/product.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Producto[] = product;

  constructor() {}

  getProducts() {
    return this.products;
  }

  getProduct(i: string) {
    return this.products[i];
  }
  getProductEdit(i: number) {
    i = i - 1;
    return this.products[i];
  }

  addProduct(product: Producto) {
    this.products.push(product);
  }
  editProduct(product: Producto, i: number) {
    this.products[i - 1].nombre = product.nombre;
    this.products[i - 1].descripcion = product.descripcion;
    this.products[i - 1].precio = product.precio;
    this.products[i - 1].stock = product.stock;
  }
}
