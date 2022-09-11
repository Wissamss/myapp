import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { Profile } from '../model/user/Profile';
import { User } from '../model/user/User';
@Injectable({
    providedIn:'root'
})
export class AuthService{
  user:User;
  profile:Profile;
    constructor(private auth:AngularFireAuth,private firestore: AngularFirestore,private navCtrl: NavController){}

   //register 
    register(value):Observable<void>{
    return new Observable<void>(observer=>{
      this.auth.createUserWithEmailAndPassword(value.email, value.password).then(()=>{
          observer.next();
          observer.complete();
          this.navCtrl.navigateForward('/login');
        }).catch(error=>{
          observer.error(error);
          observer.complete();
        })
    })
    }
   //forget password case
    recoverEmailPassword(email:string):Observable<void>{
      return new Observable<void>(observer=>{
        this.auth.sendPasswordResetEmail(email).then(()=>{
          observer.next();
          observer.complete();
        }).catch(error=>{
          observer.error(error);
          observer.complete();
        })
    })
    }
    //create new user with email as ID
    newUser(user:User) {
      return this.firestore.collection('/User/').doc(user.email).set(user);
    }
  //login
    login(email:string,password:string):Observable<User>{
      return new Observable<User>(observer=>{
      this.auth.setPersistence(firebase.default.auth.Auth.Persistence.LOCAL).then(()=>{
        this.auth.signInWithEmailAndPassword(email,password)
        .then((firebaseUser:firebase.default.auth.UserCredential)=>{
          observer.next({
            email,
            fullname: '',
            password: '',
            phonenumber: 0,
          });
          observer.complete();
        }).catch(error=>{
          observer.error(error);
          observer.complete();
        })
      }); 
      })
    }
   //access user informations
    userDetails() {
      return this.auth.user
      }
    
    
}


