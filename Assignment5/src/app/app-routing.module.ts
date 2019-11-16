import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { EmployeesComponent } from './employees-component/employees-component.component';
import { PositionComponent } from './position-component/position-component.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'employees', component: EmployeesComponent},
  {path : 'positions', component: PositionComponent},
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  {path : '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
