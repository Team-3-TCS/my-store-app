import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';

import { AppRoutingModule } from './app-routing.module';
import { AgentModule } from './pages/agent/agent.module';
import {ClientesModule} from './pages/clientes/clientes.module';
import {LoginModule} from './pages/login/login.module';
import { MensajeConfirmacionComponent } from './shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MensajeConfirmacionComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModuleModule, AppRoutingModule,AgentModule,
    ClientesModule,
    LoginModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
