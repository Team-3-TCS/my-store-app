import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from 'src/app/core/models/producto.models';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})

export class WishlistComponent implements OnInit {
  productos:Producto[]=[];
 
  constructor(private wishlistService:WishlistService) { 
    
  }

  ngOnInit(): void {
    this.wishlistService.currentDataCart$.subscribe(x=>{
      this.productos=x;
    })
  }
  public remove(producto:Producto)
  {
   this.wishlistService.removeElementWhishlist(producto);
  }

}
