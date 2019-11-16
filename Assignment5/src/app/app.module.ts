import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponent } from './home-component/home-component.component';
import { EmployeesComponent } from './employees-component/employees-component.component';
import { PositionComponent } from './position-component/position-component.component';
import { NotFoundComponent } from './not-found/not-found.component';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    ContentComponentComponent,
    FooterComponentComponent,
    HomeComponent,
    EmployeesComponent,
    PositionComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
