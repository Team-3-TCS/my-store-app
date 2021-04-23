import { Injectable } from '@angular/core';
// import { product } from 'src/app/mock/product.mock';
import { HttpClient } from '@angular/common/http';

import { Producto } from '../models/producto.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  // private datos: Producto[] = product;
  private datos: Producto[] = [];
  constructor(private http: HttpClient) {}
  getProducts() {
    this.http.get<Producto[]>(environment.ip + '/producto').subscribe((a) => {
      a.forEach((producto, index) => {
        this.datos[index] = producto;
        let imagenes = producto.imagen.toString();
        console.log(imagenes.split(','));
        this.datos[index].imagen = imagenes.split(',');
        this.datos[index].id = producto['id_producto'];
      });
      console.log(a);
    });
    return this.datos;
  }
  getProduct(id: number) {
    return this.http.get<Producto>(environment.ip + '/producto/' + id);
  }
}
