import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileDialog } from './profile.component';

@NgModule({
  declarations: [ProfileComponent,ProfileDialog],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ProfileModule {}
