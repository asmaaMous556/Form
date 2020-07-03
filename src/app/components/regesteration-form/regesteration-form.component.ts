import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { user } from 'src/app/models/user';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'regesteration-form',
  templateUrl: './regesteration-form.component.html',
  styleUrls: ['./regesteration-form.component.css']
})
export class RegesterationFormComponent implements OnInit {
  validForm:boolean
  f:FormGroup;
  constructor(private userService:UserService,private router: Router) { }

  formSubmit(user:user){
    this.userService.submitUser(user);
   
    this.router.navigate(['/login']);

  }
  // submitted():boolean{
  //  if(this.f.valid) {return true;}
  // }

  ngOnInit(): void {
  }

}
