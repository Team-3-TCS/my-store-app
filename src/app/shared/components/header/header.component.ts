import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/core/models/producto.models';
import { CartService } from 'src/app/core/services/cart.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    valor:number=0;
    total:number=0;
    cart:Producto[]=[];
  constructor(private cartService:CartService, private wishlistService:WishlistService) {
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
    
    if (localStorage.getItem('list') === null) {
      this.cart = JSON.parse(localStorage.getItem('list'));
    } else {
      this.cart = JSON.parse(localStorage.getItem('list'));

    }
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

  
    remove(product:Producto){
      this.cartService.removeElementCart(product);
      this.getDatos();

    if (localStorage.getItem('list')) {
      let getCartDetails = JSON.parse(localStorage.getItem('list'))
      this.total = getCartDetails.reduce(function (acc, val) {
        return acc + (val.precio * val.cantidad)
      }, 0)
    }
    }
  
}
