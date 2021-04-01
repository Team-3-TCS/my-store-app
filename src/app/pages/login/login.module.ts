import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';


@NgModule({
  declarations: [LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModuleModule
  ]
})
export class LoginModule { }
