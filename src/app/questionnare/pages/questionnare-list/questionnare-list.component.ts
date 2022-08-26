import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {QuestionsService} from "../../services/questions.service";
import {map, share, tap} from "rxjs";

@Component({
  selector: 'app-questionnare-list',
  templateUrl: './questionnare-list.component.html',
  styleUrls: ['./questionnare-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionnareListComponent {

  private allQuestions = this.questionService.getQuestions$().pipe(
    // share(),
    tap(() => console.log('Triggered')),
  );

  answeredQuestions$ = this.allQuestions.pipe(
    map(questions => questions.filter(q => !q.answer))
  )

  unansweredQuestions$ = this.allQuestions.pipe(
    map(questions => questions.filter(q => q.answer))
  )

  constructor(
    private questionService: QuestionsService
  ) { }
}
