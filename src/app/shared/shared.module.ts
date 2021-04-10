import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SplineComponent } from './widgets/spline/spline.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardsComponent } from './widgets/cards/cards.component';
import { PieComponent } from './widgets/pie/pie.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideBarComponent,
    SplineComponent,
    CardsComponent,
    PieComponent,
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule,
    FlexLayoutModule,
    HighchartsChartModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SideBarComponent,
    SplineComponent,
    CardsComponent,
    PieComponent,
  ],
})
export class SharedModule {}
