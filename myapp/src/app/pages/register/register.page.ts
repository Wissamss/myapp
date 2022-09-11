import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { RegisterPageForm } from './register.page.form';
import { User } from 'src/app/model/user/User';
import { AppState } from 'src/store/AppState';
import { Store } from '@ngrx/store';
import { register } from 'src/store/register/register.actions';
import { RegisterState } from 'src/store/register/RegisterState';
import{hide, show} from "src/store/loading/Loading.actions";
import{login} from "src/store/login/login.actions"
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm:RegisterPageForm;
  user:User;

  constructor(private formBuilder:FormBuilder,private navCtrl: NavController,private store:Store<AppState>,private toastController:ToastController, private fireauth: AuthService,private firestore:AuthService) { }

  ngOnInit() {
    this.createForm();
    this.watchRegisterState();
  }
  


  register(){
    // all the fileds are filled and valid then registered
    this.registerForm.getForm().markAllAsTouched();
    if(this.registerForm.getForm().valid){
      this.store.dispatch(register({user:this.registerForm.getForm().value}))
      this.fireauth.register(this.registerForm.getForm().value)
      this.firestore.newUser((this.registerForm.getForm().value))
      this.navCtrl.navigateForward('/login');
    } 
    console.log(console.error());

  }
  // create form 
  private createForm(){
    this.registerForm=new RegisterPageForm(this.formBuilder)
  }
 //observe the state then call action
  private watchRegisterState(){
    this.store.select('register').subscribe(state=>{
    this.toggleLoading(state);
    this.onRegistered(state);
    this.onError(state);
    })
  } 
  //register success
  private onRegistered(state:RegisterState){
    if(state.isRegistered){
    this.navCtrl.navigateForward('/login');
    }
  }
  //register failed
  private onError(state:RegisterState){
    if(state.error){
      this.toastController.create({
       message:state.error.message,
       duration:5000,
       header:"Registration not done"
      }).then(toast=>toast.present())
      }
  }
   //show/hide the loading component
  private toggleLoading(state:RegisterState){
    if(state.isRegistering){
      this.store.dispatch(show());
    }else{
      this.store.dispatch(hide());
    }
  }


}
