import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { WishlistComponent } from './wishlist/wishlist.component';
const routes: Routes = [
  {
    path: '',
    component: ClientComponent
  },
  { 
    path:'shoppingCart',
    component: ShoppingCartComponent
  },
  {
    path:'purchase',
    component: PurchaseComponent
  },
  {
    path:'wishlist',
    component: WishlistComponent
  },
  {
    path:'viewproduct/:id',
    component: ViewProductComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
