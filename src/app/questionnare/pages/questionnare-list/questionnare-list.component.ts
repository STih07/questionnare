import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {QuestionsService} from "../../services/questions.service";
import {map} from "rxjs";

@Component({
  selector: 'app-questionnare-list',
  templateUrl: './questionnare-list.component.html',
  styleUrls: ['./questionnare-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionnareListComponent {

  private allQuestions = this.questionService.getQuestions$().pipe();

  answeredQuestions$ = this.allQuestions.pipe(
    map(questions => questions.filter(q => q.answer)
      .sort((a, b) => {
        if (!a.answeredAt || !b.answeredAt) return 1;
        return a.answeredAt > b.answeredAt ? -1 : 1;
      }))
  )

  unansweredQuestions$ = this.allQuestions.pipe(
    map(questions => questions
      .filter(q => !q.answer)
      .sort((a, b) => {
        if (!a.lastUpdatedAt || !b.lastUpdatedAt) return 1;
        return a.lastUpdatedAt > b.lastUpdatedAt ? -1 : 1;
      }))
  )

  constructor(
    private questionService: QuestionsService
  ) { }
}
