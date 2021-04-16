import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductosService } from 'src/app/core/services/productos.service';
import { Producto } from 'src/app/core/models/producto.models';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { ToastrService } from 'ngx-toastr';
declare var jQuery:any;
declare var $:any; 
@Component({
  selector: 'app-clientes',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  total$: Observable<number>;
  total:number=0;
  productos: Producto[] = [];
  cart:Producto[]=[];
  valor: number = 0;
  constructor(
    public productosService: ProductosService,
    public cartService: CartService,
    public wishlistService: WishlistService,
    private toastr: ToastrService,
    private elRef: ElementRef
    
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
    this.getScript();
    this.obtenerProductos();
    this.getDatos();
    this.cartNumberFunc();
    this.whishlistNumber();
    if (localStorage.getItem('list') === null) {
      this.cart = JSON.parse(localStorage.getItem('list'));
    } else {
      this.cart = JSON.parse(localStorage.getItem('list'));

    }
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
    
    this.toastr.success('El producto ha sido añadido con exito!','Añadido al carrito',{
      timeOut:1500
      
    });
  }
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
    this.toastr.success('El producto ha sido añadido con exito!','Añadido al Whishlist',{timeOut:1500})
  }
  getScript(){
     //Importante no borrar
     $.getScript("./assets/js/main.js", function (data, estado) {
      if (estado == 'success') {
      //  console.log("Cargado script");
      }
      else {
        alert("Error al cargar la librería autocomplete");
      }
    });
  }
}