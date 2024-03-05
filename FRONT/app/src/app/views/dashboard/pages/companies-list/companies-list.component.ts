import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.api.getCompaniesList().toPromise().then((comapnies:any)=>{
      console.log(comapnies);
      
    })
  }

}
