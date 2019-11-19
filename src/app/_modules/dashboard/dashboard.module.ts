import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftBarComponent } from './_components/left-bar/left-bar.component';
import { MainComponent } from './_components/main/main.component';
import { DashboardRoutingModule } from './dashboard-routing';
import { WrapperComponent } from './_components/wrapper/wrapper.component';
import { MainDashboardComponent } from './_components/main-dashboard/main-dashboard.component';
import { MainPlesoComponent } from './_components/main-pleso/main-pleso.component';
import { MainBencheaComponent } from './_components/main-benchea/main-benchea.component';
import { MainBathroomComponent } from './_components/main-bathroom/main-bathroom.component';
import { MainKitchenComponent } from './_components/main-kitchen/main-kitchen.component';
import { NavbarComponent } from './_components/navbar/navbar.component';



@NgModule({
  declarations: [LeftBarComponent, MainComponent, WrapperComponent, MainDashboardComponent, MainPlesoComponent, MainBencheaComponent, MainBathroomComponent, MainKitchenComponent, NavbarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [ DashboardRoutingModule ]
})
export class DashboardModule { }
