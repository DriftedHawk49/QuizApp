import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ActualquizComponent } from './actualquiz/actualquiz.component';
import { StartquizComponent } from './actualquiz/startquiz/startquiz.component';
import { QuizgameComponent } from './actualquiz/quizgame/quizgame.component';
import { ResultsComponent } from './actualquiz/results/results.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuizgameService } from './quizgame.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ActualquizComponent,
    StartquizComponent,
    QuizgameComponent,
    ResultsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [QuizgameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
