import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentComponent } from './agent.component';
import { AgentRoutingModule } from './agent-routing.module';
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';
import { ProductsAgentComponent } from './products-agent/products-agent.component';


@NgModule({
  declarations: [AgentComponent,ProductsAgentComponent],
  imports: [CommonModule, AgentRoutingModule,MaterialModuleModule],
})
export class AgentModule {}
