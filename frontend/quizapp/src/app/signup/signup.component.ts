import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name : ['', Validators.required],
      email : ['',Validators.required, Validators.email],
      password : ['',Validators.required, Validators.minLength(6), Validators.maxLength(25)],
      repeatPassword : ['', Validators.required, Validators.minLength(6), Validators.maxLength(25)]
    });

  }



  onSubmit(){
    if(this.signupForm.invalid){
      alert("Please rectify all form errors.");
    }else{
      
    }
  }

}
