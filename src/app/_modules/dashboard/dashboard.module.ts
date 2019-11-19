import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftBarComponent } from './_components/left-bar/left-bar.component';
import { MainComponent } from './_components/main/main.component';
import { DashboardRoutingModule } from './dashboard-routing';
import { WrapperComponent } from './_components/wrapper/wrapper.component';



@NgModule({
  declarations: [LeftBarComponent, MainComponent, WrapperComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [ DashboardRoutingModule ]
})
export class DashboardModule { }
