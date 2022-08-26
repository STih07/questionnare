import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Question} from "../../../../models/question";

@Component({
  selector: 'app-answered-questions',
  templateUrl: './answered-questions.component.html',
  styleUrls: ['./answered-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnsweredQuestionsComponent {

  @Input() questions!: Question[];

}
