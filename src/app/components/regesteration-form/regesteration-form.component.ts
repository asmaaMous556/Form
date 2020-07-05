import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { user } from 'src/app/models/user';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'regesteration-form',
  templateUrl: './regesteration-form.component.html',
  styleUrls: ['./regesteration-form.component.css']
})
export class RegesterationFormComponent implements OnInit {
  
  constructor(private userService:UserService
    ,private router: Router, private auth:AuthService) { }

  formSubmit(user:user){
    this.userService.submitUser(user);
   
    this.router.navigate(['/login']);

  }
  register(email,password){
 this.auth.signUp(email,password)
  }

  ngOnInit(): void {
  }

}
