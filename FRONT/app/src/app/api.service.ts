import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {




  constructor(private http: HttpClient) { }



  getCompaniesList() {

    const token = localStorage.getItem('token');


    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(environment.API + '/api/v1/companies/list', {
      headers: headers
    });
  }





  createCompany(body: any) {

    const token = localStorage.getItem('token');


    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });


    return this.http.post(environment.API + '/api/v1/companies/add', body, {
      headers: headers
    });
  }





  deleteCompany(id: number) {
    const token = localStorage.getItem('token');


    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });


    return this.http.delete(environment.API + '/api/v1/companies/delete/' + id, {
      headers: headers
    });

  }


  getCompanyByID(id: number) {
    const token = localStorage.getItem('token');


    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(environment.API + '/api/v1/companies/details/' + id, {
      headers: headers
    });
  }




  getEmployeesList() {

    const token = localStorage.getItem('token');


    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.get(environment.API + '/api/v1/employees/list', {
      headers: headers
    });
  }



  createEmployeeAccount(body: any) {

    const   token  =  localStorage.getItem('token');

  const
      headers =
        new
          HttpHeaders({

            'Authorization': 'Bearer ' + token

          });

 

    return  this.http.post(environment.API + '/api/v1/employees/add', body, {

      headers:
        headers

    });




  }



  deleteEmployee(id: any) {

    const token  =  localStorage.getItem('token'); 
    const headers =  new
          HttpHeaders({

            'Authorization': 'Bearer ' + token

          }); 

    return this.http.delete(environment.API + '/api/v1/employees/delete/' + id, {

      headers:  headers

    });









  }



}
