import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { SideMenuComponent } from './elements/side-menu/side-menu.component';
import { CompaniesListComponent } from './pages/companies-list/companies-list.component';
import { CreateCompanyComponent } from './pages/create-company/create-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyInfoComponent } from './pages/company-info/company-info.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomePageComponent,
    NavbarComponent,
    SideMenuComponent,
    CompaniesListComponent,
    CreateCompanyComponent,
    CompanyInfoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
