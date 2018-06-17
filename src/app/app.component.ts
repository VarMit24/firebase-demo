import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
//import { KoreanLoveService } from './korean-love.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	email: string;
	password: string;
	list: any = [];
	items: Observable<any[]>;

	constructor(public authService: AuthService, db: AngularFireDatabase){
		this.items = db.list('loveList').valueChanges();
	}

	ngOnInit(){
		this.items.subscribe(items=>{
			console.log(items);
			console.log(items[0]);
			this.list = items;
			
		})
	}
  	
  	signIn(){
  		this.authService.signin(this.email,this.password);
  		this.email = this.password = '';
  	}

  	signUp(){
  		this.authService.signup(this.email,this.password);
  		this.email = this.password = '';
  	}

  	signOut(){
  		this.authService.logout();
  	}
}
