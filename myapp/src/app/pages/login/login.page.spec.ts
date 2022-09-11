import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { Store, StoreModule } from '@ngrx/store';
import { ExpectedConditions } from 'protractor';
import { Subscriber,of ,throwError, Observable} from 'rxjs';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { User } from 'src/app/model/user/User';
import { environment } from 'src/environments/environment';
import { AppState } from 'src/store/AppState';
import { loadingReducer } from 'src/store/loading/Loading.reducers';
import { login, loginFail, loginSuccess, recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from 'src/store/login/login.actions';
import { loginReducer } from 'src/store/login/login.reducers';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router:Router;
  let page;
  let store:Store<AppState>;
  let toastController:ToastController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule,
    ReactiveFormsModule,
  StoreModule.forRoot([]),StoreModule.forFeature('loading',loadingReducer),StoreModule.forFeature('login',loginReducer),AngularFireModule.initializeApp(environment.firebaseConfig)]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router=TestBed.get(Router);
    store=TestBed.get(Store);
    toastController=TestBed.get(ToastController);
    component = fixture.componentInstance;
    page=fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));
  it('should create form on init',()=>{
    component.ngOnInit();
    expect(component.form).not.toBeUndefined();
  })
  it('should go to register page after register ', () => {
    spyOn(router,'navigate');
    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['register']);
  })

  it('should recover email/password on forgot email/password',()=>{
    fixture.detectChanges();
    component.form.get('email').setValue("valid@email.com");
    page.querySelector('#recoverPasswordButton').click();
    store.select('login').subscribe(loginState=>{
      expect(loginState.isRecoveringPassword).toBeTruthy();
    })
    store.select('loading').subscribe(loadingState=>{
      expect(loadingState.show).toBeTruthy();  
      })

  })

  it('given user is recovering password,when success,then hide loading and show success message',()=>{
  spyOn(toastController,'create').and.returnValue(<any> Promise.resolve({present:()=>{}}));
  fixture.detectChanges();
  store.dispatch(recoverPassword({email:"any@email.com"}));
  store.dispatch(recoverPasswordSuccess());
  store.select('loading').subscribe(loadingState=>{
    expect(loadingState.show).toBeFalsy();
  })
  
  expect(toastController.create).toHaveBeenCalledTimes(1);
  })
  
  it('given user is recovering password,when fail,then hide loading and show error message',()=>{
  spyOn(toastController,'create').and.returnValue(<any> Promise.resolve({present:()=>{}}));
  fixture.detectChanges();
  store.dispatch(recoverPassword({email:"any@email.com"}));
  store.dispatch(recoverPasswordFail({error:"message"}));
  store.select('loading').subscribe(loadingState=>{
    expect(loadingState.show).toBeFalsy();
  })

  expect(toastController.create).toHaveBeenCalledTimes(1);

  })
  
  it('given user is logging in,when success,then hide loading and send user to home page',()=>{
    fixture.detectChanges();
    component.form.get('email').setValue('valid@email.com');
    component.form.get('password').setValue('anypassword');
    page.querySelector('#loginButton').click();
    store.select('loading').subscribe(loadingState=>{
    expect(loadingState.show).toBeTruthy();
    })
    store.select('login').subscribe(loginState=>{
      expect(loginState.isLoggingIn).toBeTruthy();
    })
  })

  it('given user is logging in,when fail,then hide loading and show error message',()=>{
  spyOn(router,'navigate');
   fixture.detectChanges();
   store.dispatch(login({email:"valid@email.com",password:"anyPassword"}));
   store.dispatch(loginSuccess({user:new User()}));

   store.select('loading').subscribe(loadingState=>{
    expect(loadingState.show).toBeFalsy();
    })
    store.select('login').subscribe(loginState=>{
      expect(loginState.isLoggedIn).toBeTruthy();
    })
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  })

  it('should hide loading and show error when couldnt login',()=>{
  spyOn(toastController,'create').and.returnValue(<any> Promise.resolve({present:()=>{}}));
   fixture.detectChanges();
   store.dispatch(login({email:"valid@email.com",password:"anyPassword"}));
   store.dispatch(loginFail({error:{message:"error message"}}));
   
   store.select('loading').subscribe(loadingState=>{
   expect(loadingState.show).toBeFalsy();
   })
   expect(toastController.create).toHaveBeenCalledTimes(1);

  })
  
});
