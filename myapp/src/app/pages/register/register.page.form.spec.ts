import { FormBuilder, FormGroup } from '@angular/forms';
import {RegisterPageForm}  from './register.page.form';

describe('RegisterPageForm',()=>{
    let registerPageForm:RegisterPageForm;
    let form:FormGroup;

    beforeEach(()=>{
        registerPageForm=new RegisterPageForm(new FormBuilder());
        form=registerPageForm.getForm();
    })

it('should empty name be invalid',()=>{
    expect(form.get('fullname').valid).toBeFalsy();
})
it('should empty email be invalid',()=>{
    expect(form.get('email').valid).toBeFalsy();
})
it('should empty password be invalid',()=>{
    expect(form.get('password').valid).toBeFalsy();
})
it('should invalid email be invalid',()=>{
    form.get('email').setValue('invalidEmail');
    expect(form.get('email').valid).toBeFalsy();
})
it('should password less than 8 characters be invalid',()=>{
    form.get('password').setValue('12345');
    expect(form.get('password').valid).toBeFalsy();
})
it('should password different from confirmpassword be invalid',()=>{
    form.get('password').setValue('anypassword');
    form.get('confirmpassword').setValue('anotherpassword');
    expect(form.get('confirmpassword').valid).toBeFalsy();
})
it('should empty phone number is invalid',()=>{
    expect(form.get('phonenumber').valid).toBeFalsy();
})
it('should form be valid',()=>{
    form.get('fullname').setValue('anyname');
    form.get('email').setValue('any@email.com');
    form.get('password').setValue('anynpass');
    form.get('confirmpassword').setValue('anypass');
    form.get('phonenumber').setValue('anynumber');
    expect(form.valid).toBeTruthy;
})
})

