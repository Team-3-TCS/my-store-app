import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentComponent } from './agent.component';
import { ProductsAgentComponent } from './products-agent/products-agent.component';
import { NewProductComponent } from './products-agent/new-product/new-product.component';
import { EditProductComponent } from './products-agent/new-product/edit-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersAgentComponent } from './orders-agent/orders-agent.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path: '',
    component: AgentComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'products',
        component: ProductsAgentComponent,
      },
      {
        path: 'newProducts',
        component: NewProductComponent,
      },
      {
        path: 'products/:id',
        component: EditProductComponent,
      },
      {
        path: 'orders',
        component: OrdersAgentComponent,
      },
      {
        path: 'reports',
        component: ReportsComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentRoutingModule {}
