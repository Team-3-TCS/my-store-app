import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from 'src/app/core/models/producto.models';
import { CartService } from 'src/app/core/services/cart.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})

export class WishlistComponent implements OnInit {
  productos:Producto[]=[];
  
  constructor(private wishlistService:WishlistService,private cartService:CartService,
    private toastr: ToastrService) { 

    
  }

  ngOnInit(): void {
   /*  this.wishlistService.currentDataCart$.subscribe(x=>{
      this.productos=x;
    }) */
  
    this.getData();
  }
  getData(){//Recibimos informacion del LocalStorage
    
    if (localStorage.getItem('listaDeseos')) {
      this.productos = JSON.parse(localStorage.getItem('listaDeseos'));
      
    }
    
  }
  addCart(product:Producto){
     this.cartService.changeCart(product);
     this.toastr.success('El producto añadido con exito!','Producto añadido',{
       timeOut:1500
     });
  }
  public remove(producto:Producto)
  {
   this.wishlistService.removeElementWhishlist(producto);
   this.toastr.error('El producto ha sido removido con exito!','Producto Removido',{
     timeOut:1500
   });
   this.getData();
  }
  
  
}
