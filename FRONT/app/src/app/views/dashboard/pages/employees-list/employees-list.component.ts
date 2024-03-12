import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees:any[] = [];


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }


  getData(){
    this.api.getEmployeesList().toPromise().then((res:any)=>{
      console.log(res);

      this.employees = res;
      
    })
  }

}
