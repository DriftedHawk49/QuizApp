import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  passwordSame = true;

  checkPasswords(p1: String, p2:String){
    return(p1==p2);
  }

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name : new FormControl('', [Validators.required]),
      email : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(25)]),
      repeatPassword : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(25)])
    });

  }

  get name() {return this.signupForm.get('name')};
  get email() {return this.signupForm.get('email')};
  get password() {return this.signupForm.get('password')};
  get repeatPassword() {return this.signupForm.get('repeatPassword')};

  onSubmit(){
    if(this.signupForm.invalid){
      alert("Please fill the form/rectify all errors.");
    }else{
      if(this.checkPasswords(this.signupForm.value.password, this.signupForm.value.repeatPassword)){
        // Call API To register

      }else{
        this.passwordSame = false;
      }
    }
  }

}
