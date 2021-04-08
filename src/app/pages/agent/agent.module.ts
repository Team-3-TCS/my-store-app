import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { EditProductComponent } from './products-agent/new-product/edit-product.component';
import { NewProductComponent } from './products-agent/new-product/new-product.component';
import { ProductsAgentComponent } from './products-agent/products-agent.component';

@NgModule({
  declarations: [
    AgentComponent,
    ProductsAgentComponent,
    NewProductComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    SharedModule,
    MaterialModuleModule,
    FormsModule,
  ],
})
export class AgentModule {}
