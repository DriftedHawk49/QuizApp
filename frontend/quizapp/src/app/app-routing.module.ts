import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualquizComponent } from './actualquiz/actualquiz.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "login",
    component: LoginComponent
  },{
    path: "signup",
    component: SignupComponent
  },{
    path: "actualquiz",
    component: ActualquizComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
