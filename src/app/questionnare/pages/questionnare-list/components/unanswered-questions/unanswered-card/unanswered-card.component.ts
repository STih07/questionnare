import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Question, QuestionType} from "../../../../../models/question";
import {FormControl, Validators} from "@angular/forms";
import {QuestionsService} from "../../../../../services/questions.service";

@Component({
  selector: 'app-unanswered-card',
  templateUrl: './unanswered-card.component.html',
  styleUrls: ['./unanswered-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnansweredCardComponent {

  questionType = QuestionType;

  @Input() question!: Question;

  answerControl = new FormControl('', [Validators.required, Validators.maxLength(255)]);

  constructor(private questionService: QuestionsService) {}

  onAnswerClick() {
    if (this.answerControl.valid) {
      this.questionService.answerQuestion(this.question.id, this.answerControl.value);
    }
  }
}
