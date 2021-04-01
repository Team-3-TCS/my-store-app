import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductosService } from 'src/app/services/productos.service';
import { map } from 'rxjs/operators';
import { producto } from 'src/app/models/producto.models';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
   total$:Observable<number>
   @Input() product: producto;
  constructor(public productosService:ProductosService,
    private cartService: CartService) { 
      this.total$=this.cartService.cart$.pipe(map(products=>products.length));
    }

  ngOnInit(): void {
  }
  obtenerProductos(){
    return this.productosService.getProducts();
  }
  addCart() {
    console.log('añadir al carrito');
    this.cartService.addCart(this.product);
    // this.productClicked.emit(this.product.id);
  }
}
