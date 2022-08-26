import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../../../models/question";

@Component({
  selector: 'app-unanswered-questions',
  templateUrl: './unanswered-questions.component.html',
  styleUrls: ['./unanswered-questions.component.scss']
})
export class UnansweredQuestionsComponent {

  @Input() questions!: Question[];

}
