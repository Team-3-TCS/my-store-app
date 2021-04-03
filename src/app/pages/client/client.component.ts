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
  @Input() product: Producto;
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
    if (localStorage.getItem('tasks') != null) {
      var cartCount = JSON.parse(localStorage.getItem('tasks'));
      console.log('cartCount');
      //    console.log(cartCount);
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
      this.aux = JSON.parse(localStorage.getItem('tasks'));
      this.valor = this.aux.length;
    }
  }
  itemsCart: any = [];
  addCar(task: Producto) {
    let count = 0;
    if (localStorage.getItem('list')) {
      let arrayList = JSON.parse(localStorage.getItem('list'));
      let index;
      for (let i in arrayList) {
        if (task.id === arrayList[i].id) {
          console.log(arrayList[i]);
          count -= 0;
          index = i;
        } else {
          count += 1;
          console.log(count);
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
      let arrayList2 = JSON.parse(localStorage.getItem('list'));

      arrayList.push(task);

      this.valor = arrayList.length;
      localStorage.setItem('list', JSON.stringify(arrayList));
    }
  }
}
