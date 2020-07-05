import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { user } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private authService:AuthService, private router:Router,
    
    ) { }

  signIn(email,password){
    this.authService.login(email,password)

  }


}
