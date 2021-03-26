import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentComponent } from './agent.component';
import { AgentRoutingModule } from './agent-routing.module';
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';


@NgModule({
  declarations: [AgentComponent],
  imports: [CommonModule, AgentRoutingModule,MaterialModuleModule],
})
export class AgentModule {}
