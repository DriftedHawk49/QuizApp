import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(25)])
    });
  }

  get email() {return this.loginForm.get('email')};
  get password() {return this.loginForm.get('password')};

  onSubmit(){
    if(this.loginForm.invalid){
      alert('Please fill the form/rectify all errors.');
    }else{
      // Call API For Login
    }
  }

}
