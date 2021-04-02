import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';
import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { NewProductComponent } from './products-agent/new-product/new-product.component';
import { ProductsAgentComponent } from './products-agent/products-agent.component';

@NgModule({
  declarations: [AgentComponent, ProductsAgentComponent, NewProductComponent],
  imports: [CommonModule, AgentRoutingModule, MaterialModuleModule],
})
export class AgentModule {}
