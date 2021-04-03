import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { AgentModule } from './pages/agent/agent.module';
import { ClientesModule } from './pages/client/clientes.module';
import { LoginModule } from './pages/login/login.module';
import { MensajeConfirmacionComponent } from './shared/mensaje-confirmacion/mensaje-confirmacion.component';


@NgModule({
  declarations: [AppComponent, MensajeConfirmacionComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
