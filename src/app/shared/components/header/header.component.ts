import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Producto } from 'src/app/core/models/producto.models';
import { CartService } from 'src/app/core/services/cart.service';
import { LoginService } from 'src/app/core/services/login.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  valor: number = 0;
  total: number = 0;
  total2: number = 0;
  productos: Producto[] = [];
  search = new FormControl('');
  @Output('search') searchEmitter = new EventEmitter<string>();
  cart: Producto[] = [];
  authState: boolean;
  myUser: any;
  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
    public loginservice: LoginService
  ) {
    this.wishlistService.currentDataCart$.subscribe((x) => {
      if (x) {
        this.total = x.length;
      }
    });
    this.cartService.currentDataCart$.subscribe((data) => {
      this.valor = data.length;
    });
    this.cartService.currentDataCart$.subscribe((data) => {
      this.productos=data;
    })
    this.cartService.totalSubject.subscribe((data) => {this.total2=data})

  }

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((valor) => this.searchEmitter.emit(valor));
    this.getData();
    
    this.loginservice.authState$.subscribe(
      (authState) => (this.authState = authState)
    );
    this.loginservice.userData$.subscribe(
      (userData) => (this.myUser = userData)
    );
    if (localStorage.getItem('list') === null) {
      this.cart = JSON.parse(localStorage.getItem('list'));
    } else {
      this.cart = JSON.parse(localStorage.getItem('list'));
    }
    this.cartService.totalSubject.subscribe((data) => {this.total2=data})

    this.getDatos();
  }
  getData() {
    //Recibimos informacion del LocalStorage
    let getCartDetails;
    if (localStorage.getItem('list')) {
      this.productos = JSON.parse(localStorage.getItem('list'));
      if (localStorage.getItem('list')) {
        getCartDetails = JSON.parse(localStorage.getItem('list'));
        this.total2 = getCartDetails.reduce(function (acc, val) {
          return acc + val.precio * val.cantidad;
        }, 0);
      }
    }
  }
  getDatos() {////
    
    let arrayList = JSON.parse(localStorage.getItem('list'));
    this.valor = arrayList.length;
    let arrayList2=JSON.parse(localStorage.getItem('listaDeseos'));
    this.total=arrayList2.length;
    //  this.cartService.addcart.next(products,this.valor);
}

  remove(product: Producto) {
    this.cartService.removeElementCart(product);
    this.getDatos();

    if (localStorage.getItem('list')) {
      let getCartDetails = JSON.parse(localStorage.getItem('list'));
      this.total = getCartDetails.reduce(function (acc, val) {
        return acc + val.precio * val.cantidad;
      }, 0);
    }
  }

  user() {
    if (this.authState === false) {
      return 'Ingresar';
    } else {
      let aux = this.myUser.nombre_usuario;
      return aux;
    }
  }

  logout() {
    this.loginservice.logout();
  }
}
