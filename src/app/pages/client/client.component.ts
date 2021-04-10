import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductosService } from 'src/app/core/services/productos.service';
import { Producto } from 'src/app/core/models/producto.models';
import { WishlistService } from 'src/app/core/services/wishlist.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  total$: Observable<number>;
  total:number=0;
  productos: Producto[] = [];
  valor: number = 0;
  constructor(
    public productosService: ProductosService,
    public cartService: CartService,
    public wishlistService: WishlistService
  ) {
    /* this.total$ = this.wishlistService.currentDataCart$.pipe(
      map((products) => products.length)
    ); */
    this.wishlistService.currentDataCart$.subscribe(x=>{
      if(x){
        this.total=x.length
      }
    })
    /* this.cartService.cartSubject.subscribe((data) => {
      this.valor=data;
    }) */
    this.cartService.currentDataCart$.subscribe((data)=>{
      this.valor=data.length;
    })


  }
  ngOnInit(): void {
     this.obtenerProductos();
    this.getDatos();
    this.cartNumberFunc();
    this.whishlistNumber();
    
  }
  obtenerProductos() {
      this.productos= this.productosService.getProducts();
   
  }
  getDatos() {
    if (localStorage.getItem('list') === null) {
      this.valor = 0;
      let arrayList = JSON.parse(localStorage.getItem('list'));
      this.valor = arrayList.length;
    } else {
      let arrayList = JSON.parse(localStorage.getItem('list'));
      this.valor = arrayList.length;
    //  this.cartService.addcart.next(products,this.valor);
   
    }
  }
  addCar(products:Producto){
    this.cartService.changeCart(products);
  }
 /* addCar(products:Producto) {
    let count = 0;
    if (localStorage.getItem('list')) {
      let arrayList = JSON.parse(localStorage.getItem('list'));
      for (let i in arrayList) {
        if (products.id === arrayList[i].id) {
          arrayList[i].cantidad += 1;
        } else {
          count += 1;
        }
      }
      if (count === arrayList.length) {
        arrayList.push(products);
      } else {
        this.valor = count;
        this.valor -= 0;
      }
      localStorage.setItem('list', JSON.stringify(arrayList));
      this.valor = arrayList.length;
    } else {
      let arrayList = [];
      arrayList.push(products);
      this.valor = arrayList.length;
      localStorage.setItem('list', JSON.stringify(arrayList));
    }
  }*/
  cartNumberFunc(){
    let cartValue =JSON.parse(localStorage.getItem('list'));
    this.cartService.cart.next(cartValue);  
  }
   whishlistNumber(){
    let whishlistValue =JSON.parse(localStorage.getItem('listaDeseos'));
    this.wishlistService.whish.next(whishlistValue);  
  }
  public addWishlist(product:Producto)
  {
    this.wishlistService.changeWishlist(product);
   
    
  }
}
/*

*/ 
