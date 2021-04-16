import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { Producto } from 'src/app/core/models/producto.models';
import { Usuario } from 'src/app/core/models/usuario.models';
import { CartService } from 'src/app/core/services/cart.service';
import { LoginService } from 'src/app/core/services/login.service';
import { UserService } from 'src/app/core/services/user.service';
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
    authState: boolean;
    myUser: any;
  constructor(private cartService:CartService, private wishlistService:WishlistService,public loginservice:LoginService) {
    this.wishlistService.currentDataCart$.subscribe(x=>{
      if(x){
        this.total=x.length
      }
    })
    this.cartService.currentDataCart$.subscribe((data)=>{
      this.valor=data.length;
    })
  }

  ngOnInit(): void {
    this.loginservice.authState$.subscribe(authState => this.authState = authState);
    this.loginservice.userData$.subscribe(userData => this.myUser = userData);
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
    
    user(){
      if (this.authState===false){
        return 'Ingresar'
      }else{
        let aux=this.myUser.nombre_usuario;
        return aux;
      }
    }

    logout() {
      this.loginservice.logout();
    }
}
