import { FormGroup, FormBuilder, Validators, ValidatorFn} from "@angular/forms";

export class RegisterPageForm {
    private formBuilder:FormBuilder;
    private form:FormGroup;
    constructor(formBuilder:FormBuilder){
        this.formBuilder=formBuilder;
        this.form=this.createForm();
    }
    //create form with validators
      private createForm():FormGroup{
       let form=this.formBuilder.group({
        fullname:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],
        confirmpassword:[''],
        phonenumber:['',[Validators.required]]
        });
        form.get('confirmpassword').setValidators(matchPasswordAndConfirmPassword(form));
        return form;
    }
    getForm():FormGroup{
        return this.form;
    }

}   
// password and cofirmpassword test
function matchPasswordAndConfirmPassword(form:FormGroup): ValidatorFn{
const password=form.get('password');
const confirmpassword=form.get('confirmpassword');
const validator=()=>{
    return password.value==confirmpassword.value ? null : {isntMatching:true}
};
return validator;
}