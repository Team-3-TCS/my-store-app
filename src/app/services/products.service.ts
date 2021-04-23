import { ProductosService } from './../core/services/productos.service';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Producto } from '../core/models/producto.models';
import { product } from '../mock/product.mock';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Producto[];

  constructor(private productosService: ProductosService) {}

  getProducts(idUser) {
    this.products = this.productosService.getProducts();
    this.products = this.products.filter(p=>p['id_vendedor'] === idUser)
    console.log(this.products);

    return this.products;
  }

  getProduct(i: string) {
    let producto;
    this.productosService.getProduct(parseInt(i)).subscribe((p) => {
      producto = p;
    });
    return producto;
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
