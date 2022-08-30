import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Question} from "../../../../models/question";

@Component({
  selector: 'app-unanswered-questions',
  templateUrl: './unanswered-questions.component.html',
  styleUrls: ['./unanswered-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'h-100'
  }
})
export class UnansweredQuestionsComponent {

  @Input() questions!: Question[];

}
