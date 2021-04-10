import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { EditProductComponent } from './products-agent/new-product/edit-product.component';
import { NewProductComponent } from './products-agent/new-product/new-product.component';
import { ProductsAgentComponent } from './products-agent/products-agent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersAgentComponent } from './orders-agent/orders-agent.component';

@NgModule({
  declarations: [
    AgentComponent,
    ProductsAgentComponent,
    NewProductComponent,
    EditProductComponent,
    OrdersAgentComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    SharedModule,
    MaterialModuleModule,
    FormsModule,
    FlexLayoutModule,
  ],
})
export class AgentModule {}
