import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ignoreElements, map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductosService } from 'src/app/core/services/productos.service';
import { Producto } from 'src/app/core/models/producto.models';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { ToastrService } from 'ngx-toastr';

import { ThrowStmt } from '@angular/compiler';
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
  filtro_valor= '';
  flag=false;
  categoria_valor:number;
  presionado:boolean;
  categorias:any[]=[{id:1,nombre:'LAPTOPS'},{id:2,nombre:'SMARTPHONES'},{id:3,nombre:'CAMERAS'}];
  productoSel:any[];
   arreglo1:any[];
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
   
    
    $.getScript("./assets/js/main.js", function (data, estado) {
      if (estado == 'success') {
        console.log("Cargado script");
      }
      else {
        alert("Error al cargar la librería autocomplete");
      }
    });
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
    
      if(!this.productoSel)
      this.productoSel=[];
      if(this.productoSel.includes(product))
      {
       this.productoSel.splice(this.productoSel.indexOf(product),1);
       this.wishlistService.removeElementWhishlist(product);
       localStorage.setItem('listaCorazones',JSON.stringify(this.productoSel));
       this.toastr.success('El producto ha sido removido con exito!','Añadido al Whishlist',{timeOut:1500})
      }
      else
      { 
        this.productoSel.push(product);
        this.wishlistService.changeWishlist(product);
        localStorage.setItem('listaCorazones',JSON.stringify(this.productoSel));
        this.toastr.success('El producto ha sido añadido con exito!','Añadido al Whishlist',{timeOut:1500});
      }
  }
  handleSearch(value:string){
     this.filtro_valor=value;
     console.log(this.filtro_valor);
  }
   onChange(valor){
    let categoria:String;
     
    /*  this.presionado=valor.target.checked;
     if(!this.presionado){
       this.categoria_valor=0;
     }
     else{
      this.categoria_valor=valor.target.value;
      console.log(this.categoria_valor);
     } */
    
  /*    if(!arreglo1){
       this.productos=this.productosService.getProducts();

     }
     if(arreglo1.includes(categoria)){
       arreglo1.splice(arreglo1.indexOf(categoria),1);
       
        arreglo2= this.productos.filter(prod=>prod.categoria.toUpperCase().includes(arreglo1));  
      arreglo1.forEach((prod:string)=> this.productos.filter(o=>categoria.toUpperCase().includes(prod)));                                 
     } */
     let ga='Lavadora LG';
     let m=valor.target.value;
     
     if(!this.arreglo1){
      /* this.productos=this.productosService.getProducts(); */
          this.arreglo1=[];
          
    }
    if(this.arreglo1.includes(m)){
      this.arreglo1.splice(this.arreglo1.indexOf(m),1);
        console.log(this.arreglo1);
       /* = this.productos.filter(prod=>prod.categoria.toUpperCase().includes(arreglo1));   */
     /* arreglo1.forEach((prod:string)=> this.productos.filter(o=>categoria.toUpperCase().includes(prod)));   */         
         this.productos=this.productosService.getProducts();                     
    }
    else{
         this.arreglo1.push(m);
         console.log(m);
         this.productos=this.productos.filter(prod=>prod.nombre.toUpperCase().includes(m.toUpperCase())); 
    }
   }
}
/*

*/ 
