import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/models/producto.models';
//datos de prueba
const datos: producto[] = [
  { id: 1, idCategoria: 1, nombre: 'LAPTOP OMEN 17', descripcion: '16GB 1T SSD', precio: 8499, stock: 51 },
  { id: 2, idCategoria: 2, nombre: 'TV LG', descripcion: '55"', precio: 2599, stock: 30 },
  { id: 3, idCategoria: 3, nombre: 'Play Station 2', descripcion: 'Consola de PS4 Pro 1TB Negro', precio: 2299, stock: 11 },
  { id: 4, idCategoria: 4, nombre: 'Celular Xiaomi', descripcion: 'REDMI 9 US 64G GRIS CARBON', precio: 559, stock: 4 },
  { id: 5, idCategoria: 5, nombre: 'Lavadora LG ', descripcion: 'Lavadora 18 Kg Blanca WWI18BBBLA', precio: 1699, stock: 70 },
  { id: 6, idCategoria: 6, nombre: 'Horno', descripcion: 'Horno Midea empotrable a Gas', precio: 1799, stock: 50 },
  { id: 7, idCategoria: 7, nombre: 'Colchón', descripcion: 'tempo', precio: 999, stock: 2 },
  { id: 8, idCategoria: 8, nombre: 'Ollas', descripcion: 'Juego de Ollas 38 Pzs', precio: 349.90, stock: 31 },
  { id: 9, idCategoria: 9, nombre: 'Reloj Hombre', descripcion: 'Guess W1264g3', precio: 314.65, stock: 20 },
  { id: 10, idCategoria: 10, nombre: 'XIAOMI', descripcion: 'XIAOMI REDMI 9 US 64 GB GRIS CARBON', precio: 589, stock: 10 },
  { id: 11, idCategoria: 10, nombre: 'XIAOMI', descripcion: 'XIAOMI REDMI NOTE 8 64 GB BLACK', precio: 649, stock: 10 },
  { id: 12, idCategoria: 10, nombre: 'IPHONE', descripcion: 'IPHONE SE 64GB BLACK', precio: 2099, stock: 10 },
  { id: 13, idCategoria: 10, nombre: 'SAMSUNG', descripcion: 'GALAXY A71 BLACK', precio: 1599, stock: 20 },
  { id: 14, idCategoria: 10, nombre: 'HUAWEI', descripcion: 'P40 LITE NEGRO', precio: 999, stock: 15 },
  { id: 15, idCategoria: 11, nombre: 'REBOOK', descripcion: 'ZAPATILLAS RUNNING MUEJR REBOOK ENERGYLUX ', precio: 135.92, stock: 10 },
  { id: 16, idCategoria: 11, nombre: 'ADIDAS', descripcion: 'ZAPATILLAS RUNNING HOMBRE ADIDAS RESPONSE SR', precio: 199.20, stock: 10 },
  { id: 17, idCategoria: 11, nombre: 'NIKE', descripcion: 'ZAPATILLAS NIKE METHOD TRAINER 2', precio: 258.30, stock: 20 },
  { id: 18, idCategoria: 11, nombre: 'NIKE ', descripcion: 'ZAPATILLAS NIKE FLEX CONTACT 3', precio: 209, stock: 20 },
  { id: 19, idCategoria: 11, nombre: 'PUMA', descripcion: 'ZAPATILLAS HOMRE PUMA ULTRA RIDE', precio: 263.20, stock: 15 }
]
@Component({
  selector: 'app-products-agent',
  templateUrl: './products-agent.component.html',
  styleUrls: ['./products-agent.component.css']
})
export class ProductsAgentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  columnas: string[] = ['codigo', 'idCategoria', 'nombre', 'descripcion', 'precio', 'stock', 'modificar', 'eliminar'];
  dataSource = datos;
}
