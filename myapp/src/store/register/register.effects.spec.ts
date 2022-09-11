import { TestBed ,} from "@angular/core/testing";
import { EffectsModule } from "@ngrx/effects";
import { Action, StoreModule, } from "@ngrx/store";
import { Observable,of, throwError} from "rxjs";
import {provideMockActions} from "@ngrx/effects/testing";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/model/user/User";
import { RegisterEffects } from "./register.effects";
import { register, registerFail, registerSuccess } from "./register.actions";




describe('Register effects',()=>{
let effects:RegisterEffects;
let actions$:Observable<Action>;
let error={error:'error'};
let authServiceMock={
    register(user:User){
        if(user.email=="error@gmail.com"){
            return throwError;
        }
        return of({});
    }
}
let user=new User();


beforeEach(()=>{
   TestBed.configureTestingModule({
    imports:[
        StoreModule.forRoot([]),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([
            RegisterEffects
        ])
    ],
    providers:[
        provideMockActions(()=>actions$)
    ]
   }).overrideProvider(AuthService,{useValue:authServiceMock})

    effects=TestBed.get(RegisterEffects);
})

it('should register return success',(done)=>{
   actions$=of(register({user:new User()}));
   effects.register$.subscribe(newAction=>{
    expect(newAction).toEqual(registerSuccess());
    done();
   })
})

it('should register return error',(done)=>{
    const user=new User();
    user.email="error@gmail.com";
    actions$=of(register({user:new User()}));
    effects.register$.subscribe(newAction=>{
     expect(newAction).toEqual(registerFail({error}));
     done();
    })
 }) 
})

