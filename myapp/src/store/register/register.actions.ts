import { createAction,props } from "@ngrx/store";
import { User} from "src/app/model/user/User";

export const register=createAction('[Register]',props<{user:User}>());
export const registerSuccess=createAction('[Register] success');
export const registerFail=createAction('[register] fail',props<{error:any}>());