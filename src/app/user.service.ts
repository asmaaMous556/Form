import { Injectable } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {  AngularFireDatabase } from '@angular/fire/database';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private db : AngularFireDatabase ) {
 
   }
   submitUser(user){
     return   this.db.list('/users').push(user);
   }
}
