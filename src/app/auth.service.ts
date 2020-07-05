import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { user } from './models/user';
import { promise } from 'protractor';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

user$:Observable<firebase.User>
  constructor( private afauth:AngularFireAuth, private userService:UserService,private router:Router)
   {
    this.user$=afauth.authState;
   }

   signUp(email,password){
return this.afauth.createUserWithEmailAndPassword(email,password)
.then(result=>{
  window.alert('Thank You for Registeration');
  console.log(result.user)
}).catch(error=>window.alert(error.message))
   }

  login(email,password):Promise<firebase.auth.UserCredential> {
 return  this.afauth.signInWithEmailAndPassword(email,password).then((result)=>
{this.router.navigate(['/home'])})
.catch(error=>error.message)
}
  logout(){
   return  this.afauth.signOut();
  }

  get appUser$(): Observable<user>{
return this.user$.pipe(switchMap(user=>
  {
    return this.userService.get(user.uid)
  }))
  }
}
