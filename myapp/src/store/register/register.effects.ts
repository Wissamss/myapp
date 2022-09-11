import { Injectable } from "@angular/core";
import{Actions,createEffect,ofType} from "@ngrx/effects";
import{ catchError, map,switchMap } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { of } from "rxjs";
import { register, registerFail, registerSuccess } from "./register.actions";
import { User} from "src/app/model/user/User";

@Injectable()

export class RegisterEffects{
    constructor(private actions$:Actions, private authService:AuthService){

    }

    register$=createEffect(()=>this.actions$.pipe(
        ofType(register),
        switchMap((payload:{user:User})=>this.authService.register(payload.user).pipe(
            map(()=>registerSuccess()),
            catchError(error=>of(registerFail({error})))
        ))

    ))


}




