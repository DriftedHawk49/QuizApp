import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-startquiz',
  templateUrl: './startquiz.component.html',
  styleUrls: ['./startquiz.component.scss']
})
export class StartquizComponent implements OnInit {

  @Output() GameStageChangeEvent = new EventEmitter<number>();

  constructor() { }
  maxScore: Number = 0;
  ngOnInit(): void {
  }

  startgame(){
    this.GameStageChangeEvent.emit(1);
  }

}
