import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {


  menu:any[] = [
    {
      path:'',
      name:'Dashboad',
      icon:'bi bi-grid'
    } ,
    {
      path:'/dashboard/companies',
      name:'My companies',
      icon:'bi bi-menu-button-wide'
    },
    {
      path:'/dashboard/employees',
      name:'My employees',
      icon:'bi bi-person-gear'
    },
    
    
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
