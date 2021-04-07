import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductosService } from 'src/app/core/services/productos.service';
import { Producto } from 'src/app/core/models/producto.models';
@Component({
  selector: 'app-clientes',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  total$: Observable<number>;
  productos: Producto[] = [];
  aux: Producto[] = [];
  valor: number = 0;
  constructor(
    public productosService: ProductosService,
    private cartService: CartService
  ) {
    this.total$ = this.cartService.cart$.pipe(
      map((products) => products.length)
    );
    this.cartService.cartSubject.subscribe((data) => {
      this.valor = data;
    });
  }
  ngOnInit(): void {
    this.productos = this.productosService.getProducts();
    var va = JSON.parse(localStorage.getItem('list'));
    this.valor = va.length;
    this.getDatos();
    this.controleCart();
  }
  controleCart() {
    if (localStorage.getItem('list') != null) {
      var cartCount = JSON.parse(localStorage.getItem('list'));
      this.valor = cartCount.length;
      this.cartService.cartSubject.next(this.valor);
    }
  }
  obtenerProductos() {
    this.productosService.getProducts();
    return this.productosService.getProducts();
  }
  getDatos() {
    if (localStorage.getItem('list') === null) {
      this.valor = 0;
    } else {
      this.aux = JSON.parse(localStorage.getItem('list'));
      this.valor = this.aux.length;
    }
  }
  itemsCart: any = [];
  addCar(task) {
    let count = 0;
    if (localStorage.getItem('list')) {
      let arrayList = JSON.parse(localStorage.getItem('list'));
      for (let i in arrayList) {
        if (task.id === arrayList[i].id) {    
          arrayList[i].cantidad+=1;
        } else {
          count += 1;     
        }
      }
      if (count === arrayList.length) {
        arrayList.push(task); 
      } else {
        this.valor = count;
        this.valor -= 0;
      }
      localStorage.setItem('list', JSON.stringify(arrayList));
      this.valor = arrayList.length;
    } else {
      let arrayList = [];
      arrayList.push(task);
      this.valor = arrayList.length;
      localStorage.setItem('list', JSON.stringify(arrayList));
    }
  }
  agregar(products){
    for(let i=0; i<this.productos.length; i++){
      if (this.productos[i].id === products.id) {
        this.productos[i].cantidad = parseInt(products.cantidad)+1
        console.log( this.productos[i].cantidad );      
      }
    }
    localStorage.setItem('list', JSON.stringify(this.productos))
  }
}
