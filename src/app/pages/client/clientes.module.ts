import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientesRoutingModule } from './client-routing.module';
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { WishlistComponent} from './wishlist/wishlist.component';


@NgModule({
  declarations: [ClientComponent, ShoppingCartComponent, PurchaseComponent, WishlistComponent],
  imports: [CommonModule, ClientesRoutingModule, MaterialModuleModule],
})
export class ClientesModule {}
