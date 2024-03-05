import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CompaniesListComponent } from './pages/companies-list/companies-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children:[
    {path:'', component:HomePageComponent },
    {path:'companies', component:CompaniesListComponent },
    

  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
