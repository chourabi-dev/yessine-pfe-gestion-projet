import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email] ) ,
    password: new FormControl('',Validators.required)
  })


  errorMessage:string='';

  loading:boolean = false;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  signin(){

    this.loading = true;
    this.errorMessage='';

    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
      
    }


    this.auth.auth( user ).toPromise().then((res:any)=>{
      
      console.log(res);

      localStorage.setItem('token',res.token);


      // redirect to dashboard !!!

      this.router.navigateByUrl('/dashboard');


      
    }).catch((err:HttpErrorResponse)=>{
      

      if (err.status == 401) {
        this.errorMessage="Wrong email or password, please check your informations and try again."
      }else{
        this.errorMessage='Something went wrong, please try again later.'
      }
      
    }).finally(()=>{
      this.loading = false;
    })

  }

}
