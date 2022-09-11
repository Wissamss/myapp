import { User} from "src/app/model/user/User";
import { AppInitialState } from "../AppinitialState"
import { register, registerFail, registerSuccess } from "./register.actions";
import { registerReducer } from "./register.reducers";

describe('Register store',()=>{
    it('Register',()=>{
     const initialState={
        ...AppInitialState.register
     };
     const newState=registerReducer(initialState,register({user:new User()}));
    expect(newState).toEqual({
        ...initialState,
        error:null,
        isRegistered:false,
        isRegistering:true,
    })
   });

   it('RegisterSuccess',()=>{
    const initialState={
       ...AppInitialState.register,
       isRegistering:true,
    };
    const newState=registerReducer(initialState,registerSuccess());
   expect(newState).toEqual({
       ...initialState,
       isRegistered:true,
       isRegistering:false,
   })
  });

  it('RegisterFail',()=>{
    const initialState={
       ...AppInitialState.register,
       isRegistering:true,
    };
    const error={error:"anyError"}
    const newState=registerReducer(initialState,registerFail({error}));
   expect(newState).toEqual({
       ...initialState,
       error,
       isRegistered:false,
       isRegistering:false,
   })
  });

})