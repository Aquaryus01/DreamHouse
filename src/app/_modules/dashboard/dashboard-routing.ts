import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './_components/wrapper/wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: WrapperComponent, data: {router: 'dashboard'} },
  { path: 'pleso', component: WrapperComponent, data: {router: 'pleso'} },
  { path: 'benchea', component: WrapperComponent, data: {router: 'benchea'} },
  { path: 'bathroom', component: WrapperComponent, data: {router: 'bathroom'} },
  { path: 'kitchen', component: WrapperComponent, data: {router: 'kitchen'} },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }