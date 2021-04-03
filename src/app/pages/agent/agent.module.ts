import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';
import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { NewProductComponent } from './products-agent/new-product/new-product.component';
import { EditProductComponent } from './products-agent/new-product/edit-product.component';
import { ProductsAgentComponent } from './products-agent/products-agent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AgentComponent, ProductsAgentComponent, NewProductComponent, EditProductComponent],
  imports: [CommonModule, AgentRoutingModule, MaterialModuleModule, FormsModule],
})
export class AgentModule {}
