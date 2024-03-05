import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { SideMenuComponent } from './elements/side-menu/side-menu.component';
import { CompaniesListComponent } from './pages/companies-list/companies-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomePageComponent,
    NavbarComponent,
    SideMenuComponent,
    CompaniesListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
