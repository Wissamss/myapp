import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../model/user/User';
import{Profile} from '../model/user/Profile'

@Injectable({
  providedIn: 'root'
})
export class AccessService {


  constructor( private firestore: AngularFirestore) { }

  // get the informations from user and profile collection 
  getUser(email: string) {
    return this.firestore.doc('/User/'+email).valueChanges();
  }
  getProfile(fullname: string) {
    return this.firestore.doc('/Profile/'+fullname).valueChanges();
  }

  //Add new profile collection into user collection 
  newProfile(user,profile:Profile) {
    return this.firestore.doc('/User/'+user.email).collection('/Profile/').doc(user.fullname).set(profile);
  }




}
