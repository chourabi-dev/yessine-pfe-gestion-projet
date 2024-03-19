import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-employees-add',
  templateUrl: './employees-add.component.html',
  styleUrls: ['./employees-add.component.css']
})
export class EmployeesAddComponent implements OnInit {



  form = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
   
    
  })

  success:string='';

    error:string='';
    loading: boolean = false;
   
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }
SaveEmployee() {
  this.error='';

  const employee = this.form.value;
  this.loading  = true;
  
  this.api.createEmployeeAccount(employee).toPromise().then((res:any)=>{
    console.log(res);
    if (res.success == true) {
      this.success = res.message;

      // redirect 

      this.router.navigateByUrl('/dashboard/employees');
    }else{
      this.error = res.message;
    }
    
  }).catch((err:HttpErrorResponse)=>{
    if (err.status == 500) { // ERROR SQL
      this.error="Employee already Exist";
    }
  }).finally(() => {

    this.loading  =  false;
  });


}
}