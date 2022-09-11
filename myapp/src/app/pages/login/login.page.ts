import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormBuilder,FormGroup} from '@angular/forms';
import { LoginPageForm } from './login.page.form';
import { Store } from '@ngrx/store';
import { hide, show } from 'src/store/loading/Loading.actions';
import { AppState } from 'src/store/AppState';
import {NavController, ToastController } from '@ionic/angular';
import { login,recoverPassword } from 'src/store/login/login.actions';
import { LoginState } from 'src/store/login/LoginState';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  constructor(private navController:NavController, private router: Router,private formBuilder:FormBuilder,private store:Store<AppState>,private toastController:ToastController) { }

  ngOnInit() {
    // create a new form : LoginPageForm
    this.form=new LoginPageForm(this.formBuilder).createForm();
    // observe the state of login to call the  correct action
     this.store.select('login').subscribe( LoginState=>{
      this.onIsRecoveredPassword(LoginState);
      this.onError( LoginState);
      this.onIsLoggedIn(LoginState);
    this.toggleLoading(LoginState);
    })
    }
  

   // to show/hide the loading component
  private toggleLoading(loginState:LoginState){
    if(loginState.isLoggingIn || loginState.isRecoveringPassword){
      this.store.dispatch(show());
    }else{
      this.store.dispatch(hide());
    }
  }
  //login success
  private onIsLoggedIn(loginState:LoginState){
    if(loginState.isLoggedIn){
      this.router.navigate(['fisrtpage']);
    }
  }
 // recovered password success
  private async onIsRecoveredPassword(loginState:LoginState){
    if(loginState.isRecoveredPassword){
      const toaster=await this.toastController.create({
      position:"bottom",
      message:'Recovery Email Sent',
      color:"warning",
      });
      toaster.present();
    }
  }
  //login error
  private async  onError(loginState:LoginState){
    if(loginState.error){
      const toaster=await this.toastController.create({
      position:"bottom",
      message:loginState.error.message,
      color:"danger",
      });
      toaster.present();

  }
  }
  forgotEmailPassword(){
   this.store.dispatch(recoverPassword({email:this.form.get('email').value}));
  }

  login(){
    this.store.dispatch(login({email:this.form.get('email').value,password:this.form.get('password').value}));
  }

  register(){
    this.router.navigate(['register']);
  }


}
