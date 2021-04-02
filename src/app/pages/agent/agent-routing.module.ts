import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentComponent } from './agent.component';
import { ProductsAgentComponent } from './products-agent/products-agent.component';
import { NewProductComponent } from './products-agent/new-product/new-product.component';

const routes: Routes = [
  {
    path: '',
    component: AgentComponent,
    children: [
      {
        path: 'products',
        component: ProductsAgentComponent,
      },
      {
        path: 'newProducts',
        component: NewProductComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentRoutingModule {}
