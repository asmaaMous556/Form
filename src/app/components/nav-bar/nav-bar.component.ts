import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { user } from 'src/app/models/user';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
user:user;
  constructor( private auth:AuthService) { 
 auth.appUser$.subscribe(user=>this.user=user)
  
  }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
  }
}
