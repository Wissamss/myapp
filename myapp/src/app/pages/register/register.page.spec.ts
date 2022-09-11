import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { Store, StoreModule } from '@ngrx/store';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { User } from 'src/app/model/user/User';
import { AppState } from 'src/store/AppState';
import { loadingReducer } from 'src/store/loading/Loading.reducers';
import { loginReducer } from 'src/store/login/login.reducers';
import { register, registerFail, registerSuccess } from 'src/store/register/register.actions';
import { registerReducer } from 'src/store/register/register.reducers';
import { RegisterPageModule } from './register.module';
import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let router:Router;
  let page;
  let store:Store<AppState>;
  let toastController:ToastController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule,
      ReactiveFormsModule,
    StoreModule.forRoot([]),
  StoreModule.forFeature('loading',loadingReducer),
  StoreModule.forFeature('login',loginReducer),
  StoreModule.forFeature('register',registerReducer)
]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    router=TestBed.get(Router);
    store=TestBed.get(Store);
    toastController=TestBed.get(ToastController);
    component = fixture.componentInstance;
    page=fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));
   
  it('should create register form on page init',()=>{
    fixture.detectChanges();
    expect(component.registerForm).not.toBeUndefined();
  })

  it('should not be allowed to register with form invalid',()=>{
    fixture.detectChanges();
    clickOnRegisterButton();
    store.select('register').subscribe(state=>{
      expect(state.isRegistering).toBeFalsy();
    })

  })

  it('given form valid,when user clicks on register,then register',()=>{
    fixture.detectChanges();
    fillForm();
    clickOnRegisterButton();
    store.select('register').subscribe(state=>{
      expect(state.isRegistering).toBeTruthy();
    })
  })

  it('given form valid,when user clicks on register,then show loading',()=>{
      fixture.detectChanges();
      fillForm();
      clickOnRegisterButton();
      store.select('loading').subscribe(state=>{
        expect(state.show).toBeTruthy();
      })
    
  })
  
  it('should hide loading component when registration successful',()=>{
    fixture.detectChanges();

    store.dispatch(register({user:new User()}));
    store.dispatch(registerSuccess());

    store.select('loading').subscribe(state=>{
      expect(state.show).toBeFalsy();
    })
  })
  it('should go to login page when registration successful',()=>{
    fixture.detectChanges();
    spyOn(router,'navigate');
    store.dispatch(register({user:new User()}));
    store.dispatch(registerSuccess());

    store.select('loading').subscribe(state=>{
      expect(state.show).toBeFalsy();
    })
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  })
  
  it('should hide loading component when registration fails',()=>{
    fixture.detectChanges();

    store.dispatch(register({user:new User()}));
    store.dispatch(registerFail({error:{message:"anymessage"}}));

    store.select('loading').subscribe(state=>{
      expect(state.show).toBeFalsy();
    })
  })
  


  it('should show error page when registration fails',()=>{
    fixture.detectChanges();
    
    spyOn(toastController,'create').and.returnValue(<any>Promise.resolve({present:()=>{}}));
    store.dispatch(register({user:new User()}));
    store.dispatch(registerFail({error:{message:"anymessage"}}));

    expect(toastController.create).toHaveBeenCalled();
  })
  function clickOnRegisterButton(){
    page.querySelector('ion-button').click();
  }
  function fillForm(){
    component.registerForm.getForm().get('fullname').setValue('anyname');
    component.registerForm.getForm().get('email').setValue('any@email.com');
    component.registerForm.getForm().get('password').setValue('anypass');
    component.registerForm.getForm().get('confirmpassword').setValue('anypass');
    component.registerForm.getForm().get('phonenumber').setValue('anynumber');
  }
})

