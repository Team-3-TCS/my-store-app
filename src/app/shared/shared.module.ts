import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SideBarComponent],
  imports: [CommonModule, MaterialModuleModule, RouterModule, FlexLayoutModule],
  exports: [FooterComponent, HeaderComponent, SideBarComponent],
})
export class SharedModule {}
