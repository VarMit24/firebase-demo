import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
  	this.user  = firebaseAuth.authState;
  }


  signup(email: string, pass: string){
  	this.firebaseAuth.auth.createUserWithEmailAndPassword(email,pass)
  	.then(data=>{
  		console.log(data);
  	}).catch(err=>{
  		console.log(err.message);
  	})
  }

  signin(email: string, pass: string){
  	this.firebaseAuth.auth.signInWithEmailAndPassword(email,pass)
  	.then(data=>{
  		console.log(data);
  	}).catch(err=>{
  		console.log(err.message);
  	})
  }

  logout(){
  	this.firebaseAuth.auth.signOut();
  }
}
