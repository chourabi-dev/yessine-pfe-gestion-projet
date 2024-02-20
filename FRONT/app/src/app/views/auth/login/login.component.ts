import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  signin(){
    this.auth.auth( { email:"tchourabi@gmail.com",password:"123456789" } ).toPromise().then((res:any)=>{
      console.log(res);
      
    }).catch((err:any)=>{
      console.log(err);
      
    })
  }

}
