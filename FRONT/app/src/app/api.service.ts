import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  


  constructor(private http:HttpClient) { }



  getCompaniesList(){

    const token = localStorage.getItem('token');
     
      
    const headers= new HttpHeaders({
      'Authorization':'Bearer '+token
    });
    
    /*
    .set('Content-Type','application/json')
    .set('Authorization',  'Bearer '+token );*/


    return this.http.get(environment.API+'/api/v1/companies/list',{
      headers: headers
    });
  }



  

  createCompany(body:any){

    const token = localStorage.getItem('token');
     
      
    const headers= new HttpHeaders({
      'Authorization':'Bearer '+token
    });
     

    return this.http.post(environment.API+'/api/v1/companies/add',body,{
      headers: headers
    });
  }

  


}
