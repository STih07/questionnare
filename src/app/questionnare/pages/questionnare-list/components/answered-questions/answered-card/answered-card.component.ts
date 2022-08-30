import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Question, QuestionType} from "../../../../../models/question";
import {QuestionsService} from "../../../../../services/questions.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-answered-card',
  templateUrl: './answered-card.component.html',
  styleUrls: ['./answered-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnsweredCardComponent implements OnChanges {

  @Input() question!: Question;
  questionType = QuestionType;

  answerControl = new FormControl({value: '', disabled: true});

  constructor(private questionService: QuestionsService) { }

  ngOnChanges(changes: SimpleChanges) {
    const question = changes['question'];
    if (question) {
      this.answerControl.setValue(question.currentValue.answer);
    }
  }

  onClearAnswerClick() {
    this.questionService.clearAnswer(this.question.id);
  }
}
