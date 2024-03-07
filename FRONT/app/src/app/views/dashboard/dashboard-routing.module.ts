import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CompaniesListComponent } from './pages/companies-list/companies-list.component';
import { CreateCompanyComponent } from './pages/create-company/create-company.component';
import { CompanyInfoComponent } from './pages/company-info/company-info.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children:[
    {path:'', component:HomePageComponent },
    {path:'companies', component:CompaniesListComponent },
    {path:'companies/add', component:CreateCompanyComponent },
    {path:'companies/details/:id', component:CompanyInfoComponent },
    
    
    

  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
