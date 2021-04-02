import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientesRoutingModule } from './client-routing.module';
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';

@NgModule({
  declarations: [ClientComponent],
  imports: [CommonModule, ClientesRoutingModule, MaterialModuleModule],
})
export class ClientesModule {}
