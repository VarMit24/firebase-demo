import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KoreanLoveService {
	loveList: Observable<any>;

  // constructor(private fireBaseDB: AngularFirestore) { 
  // 	this.loveList = fireBaseDB.collection('loveList').valueChanges();
  // 	console.log(this.loveList);

  // }
}
