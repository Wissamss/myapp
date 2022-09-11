import { TestBed } from '@angular/core/testing';
import { Route, Router, RouterModule } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { User } from 'src/app/model/user/User';
import { AppState } from 'src/store/AppState';
import { loginSuccess } from 'src/store/login/login.actions';
import { loginReducer } from 'src/store/login/login.reducers';

import { AuthGuard } from './auth-guard';

describe('AuthGuardService', () => {
  let guard: AuthGuard;
  let store:Store<AppState>;
  let router:Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot([]),
        StoreModule.forFeature('login',loginReducer),
        RouterModule.forRoot([]),
      ]
    });
    guard=TestBed.inject(AuthGuard);
    store=TestBed.get(Store);
    router=TestBed.get(Router);
  });

  it('should allow logged user to access page', () => {
    store.dispatch(loginSuccess({user:new User()}));

    guard.canLoad().subscribe(isAllowed=>{
      expect(isAllowed).toBeTruthy();
    })
  });

  it('should not allow access page if user is not logged in', () => {

      guard.canLoad().subscribe(isAllowed=>{
      expect(isAllowed).toBeFalsy();
    })
  });
  it('should not allowed user be sent to the login page', () => {
    spyOn(router,'navigateByUrl');
    guard.canLoad().subscribe(()=>{
    expect(router.navigateByUrl).toHaveBeenCalledWith('login');
  })
})

});
