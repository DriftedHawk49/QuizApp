import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizgameService {

  constructor() { }

  private quizStage = 0;

  getQuizStage(){ return this.quizStage};
  setQuizStage(t){ if(t>2){t=2}else if(t<0){t=0}; this.quizStage = t;}

}
