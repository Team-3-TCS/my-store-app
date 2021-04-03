import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentComponent } from './agent.component';
import { ProductsAgentComponent } from './products-agent/products-agent.component';
import { NewProductComponent } from './products-agent/new-product/new-product.component';
import { EditProductComponent } from './products-agent/new-product/edit-product.component';

const routes: Routes = [
  {
    path: '',
    component: AgentComponent,
    children: [{
      path: 'products',
      component: ProductsAgentComponent
    },
    {
      path: 'product/newProducts',
      component: NewProductComponent
    },
    {
      path: 'products/:id',
      component: EditProductComponent
    }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentRoutingModule {}
