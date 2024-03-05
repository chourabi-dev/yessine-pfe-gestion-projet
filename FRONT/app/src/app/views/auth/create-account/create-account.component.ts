import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {


  formulaire = new
    FormGroup({

      email: new
        FormControl('', [Validators.required, Validators.email]),

      password:
        new
          FormControl('', Validators.required),

      fullName:
        new
          FormControl('', Validators.required)


    })

  errorMessage: string = '';

  loading: boolean = false;





  constructor(private auth: AuthService, private router: Router) { }



  ngOnInit():  void {
  }

  signup() {

    this.loading  = true;

    this.errorMessage = '';



    const
      user
        = {

        email:
          this.formulaire.value.email,

        password:
          this.formulaire.value.password,

        fullName:
          this.formulaire.value.fullName
      };



    this.auth.createAccount(user).toPromise().then((res: any)=> {

      console.log(res);  
      this.router.navigateByUrl('/auth');

     }).catch((err: HttpErrorResponse)  => {

      if (err.status  === 401) {

        this.errorMessage  = 'User with this email already exists. Please use a different email.';
      }
      else {

        this.errorMessage   =  'Something went wrong, please try again.';
      }
    }).finally(() => {

      this.loading  =  false;
    });
  }





}
