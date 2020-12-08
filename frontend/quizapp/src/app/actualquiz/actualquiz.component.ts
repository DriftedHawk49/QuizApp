import { Component, OnInit } from '@angular/core';
import { QuizgameService } from '../quizgame.service';


@Component({
  selector: 'app-actualquiz',
  templateUrl: './actualquiz.component.html',
  styleUrls: ['./actualquiz.component.scss']
})
export class ActualquizComponent implements OnInit {

  constructor(private quizEngine : QuizgameService) { }

  gameStage = 0;

  ngOnInit(): void {
    this.gameStage = this.quizEngine.getQuizStage();
  }

}
