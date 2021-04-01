import { Injectable } from '@angular/core';
import { producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  /* private datos: producto[] = [

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
  ] */
  private datos:producto[]=[
    { id: 1, idCategoria: 1, nombre: 'LAPTOP OMEN 17', descripcion: '16GB 1T SSD', precio: 8499, stock: 51,imagen:"https://d598hd2wips7r.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/4/P/4PG18LA-2_T1578950179.png" },
  { id: 2, idCategoria: 2, nombre: 'TV LG', descripcion: '55"', precio: 2599, stock: 30,imagen:"https://images.samsung.com/is/image/samsung/pe-uhdtv-nu7090-un50nu7090gxpe-frontblack-112114837?$720_576_PNG$" },
  { id: 3, idCategoria: 3, nombre: 'Play Station 2', descripcion: 'Consola de PS4 Pro 1TB Negro', precio: 2299, stock: 11,imagen:"https://upload.wikimedia.org/wikipedia/commons/3/39/PS2-Versions.png" },
  { id: 4, idCategoria: 4, nombre: 'Celular Xiaomi', descripcion: 'REDMI 9 US 64G GRIS CARBON', precio: 559, stock: 4,imagen:"https://compuusa.com.pe/7095-thickbox_default/celular-xiaomi-redmi-note-9-pro-128gb-lte.jpg" },
  { id: 5, idCategoria: 5, nombre: 'Lavadora LG ', descripcion: 'Lavadora 18 Kg Blanca WWI18BBBLA', precio: 1699, stock: 70,imagen:"https://www.lg.com/cl/images/lavadoras/md07521005/350.jpg" },
  { id: 6, idCategoria: 6, nombre: 'Horno', descripcion: 'Horno Midea empotrable a Gas', precio: 1799, stock: 50,imagen:"https://www.sole.com.pe/1468/horno-empotrable-premium-012-electrico.jpg" },
  { id: 7, idCategoria: 7, nombre: 'Colchón', descripcion: 'tempo', precio: 999, stock: 2,imagen:"https://oechsle.vteximg.com.br/arquivos/ids/1140150-1000-1000/1496386_1.jpg?v=637492237275270000" },
  { id: 8, idCategoria: 8, nombre: 'Ollas', descripcion: 'Juego de Ollas 38 Pzs', precio: 349.90, stock: 31,imagen:"https://th.bing.com/th/id/OIP.zobuRrpAomUJxeHkJj2ggAHaHa?w=216&h=216&c=7&o=5&dpr=1.25&pid=1.7" },
  { id: 9, idCategoria: 9, nombre: 'Reloj Hombre', descripcion: 'Guess W1264g3', precio: 314.65, stock: 20,imagen:"https://falabella.scene7.com/is/image/FalabellaPE/17457748_1?wid=800&hei=800&qlt=70" },
  { id: 10, idCategoria: 10, nombre: 'XIAOMI', descripcion: 'XIAOMI REDMI 9 US 64 GB GRIS CARBON', precio: 589, stock: 10,imagen:"https://i.ibb.co/3TTsydq/RN8-negro.jpg"},
  { id: 11, idCategoria: 10, nombre: 'XIAOMI', descripcion: 'XIAOMI REDMI NOTE 8 64 GB BLACK', precio: 649, stock: 10,imagen:"https://i.ibb.co/3TTsydq/RN8-negro.jpg"},
  { id: 12, idCategoria: 10, nombre: 'IPHONE', descripcion: 'IPHONE SE 64GB BLACK', precio: 2099, stock: 10,imagen:"https://media.revistagq.com/photos/5ed4bdebf95b900ced636e00/master/pass/iphone13.jpg" },
  { id: 13, idCategoria: 10, nombre: 'SAMSUNG', descripcion: 'GALAXY A71 BLACK', precio: 1599, stock: 20,imagen:"https://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2020/02/27135752/SAMSUNG-GALAXY-A51-NEGRO-1.jpg" },
  { id: 14, idCategoria: 10, nombre: 'HUAWEI', descripcion: 'P40 LITE NEGRO', precio: 999, stock: 15,imagen:"https://equiposlibres.pe/wp-content/uploads/2020/08/2f343b5d-428_428_cb3079355e7ac92c4c1960c2abf50d5f707e9595a5392bb9.jpg" },
  { id: 15, idCategoria: 11, nombre: 'REBOOK', descripcion: 'ZAPATILLAS RUNNING MUEJR REBOOK ENERGYLUX ', precio: 135.92, stock: 10,imagen:"https://assets.reebok.com/images/w_600,f_auto,q_auto/7251e5c50af04221981ca991002ffe11_9366/Zapatillas_Reebok_Royal_Charm_Blanco_DV5410_01_standard.jpg" },
  { id: 16, idCategoria: 11, nombre: 'ADIDAS', descripcion: 'ZAPATILLAS RUNNING HOMBRE ADIDAS RESPONSE SR', precio: 199.20, stock: 10,imagen:"https://runastore.pe/media/catalog/product/cache/1/image/1600x/040ec09b1e35df139433887a97daa66f/b/q/bq3999-002-001__1.jpg" },
  { id: 17, idCategoria: 11, nombre: 'NIKE', descripcion: 'ZAPATILLAS NIKE METHOD TRAINER 2', precio: 258.30, stock: 20,imagen:"https://home.ripley.com.pe/Attachment/WOP_5/2084238089875/2084238089875-1.jpg" },
  { id: 18, idCategoria: 11, nombre: 'NIKE ', descripcion: 'ZAPATILLAS NIKE FLEX CONTACT 3', precio: 209, stock: 20,imagen:"http://home.ripley.com.pe/Attachment/WOP_5/2025204831395/2025204831395_2.jpg" },
  { id: 19, idCategoria: 11, nombre: 'PUMA', descripcion: 'ZAPATILLAS HOMRE PUMA ULTRA RIDE', precio: 263.20, stock: 15,imagen:"https://media.gq.com.mx/photos/5fbadd34e61591eae03e7c3b/master/pass/puma-tenis-nintendo.jpg" }
  ];
  constructor() { }
  getProducts(){
    return this.datos;
  }
}
