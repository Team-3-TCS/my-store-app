import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentComponent } from './agent.component';
import { ProductsAgentComponent } from './products-agent/products-agent.component';

const routes: Routes = [
  {
    path: '',
    component: AgentComponent,
    children: [{
      path: 'products',
      component: ProductsAgentComponent
    }]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentRoutingModule {}
