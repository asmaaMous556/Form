import { Injectable } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {  AngularFireDatabase } from '@angular/fire/database';
import { user } from './models/user';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private db : AngularFireDatabase ) {
 
   }
   submitUser(user){
     return   this.db.list('/users').push(user);
   }

   get (uid: string):Observable<user>{
    return this.db.object<user>('/users/'+uid).valueChanges();
  
}
}
