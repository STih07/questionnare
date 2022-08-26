import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Question, QuestionType} from "../../models/question";
import {QuestionsService} from "../../services/questions.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-questionnare-create',
  templateUrl: './questionnare-create.component.html',
  styleUrls: ['./questionnare-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionnareCreateComponent {


  questionType = QuestionType;

  questionForm = this.fb.nonNullable.group({
    description: ['', Validators.required],
    type: [this.questionType.SINGLE]
  });

  get isQuestionWithOptions(): boolean {
    const question = this.questionForm.value;
    return question.type === this.questionType.SINGLE || question.type === this.questionType.MULTIPLE;
  }



  constructor(
    private fb: FormBuilder,
    private questionService: QuestionsService,
    private router: Router
  ) { }

  createQuestion() {
    if (this.questionForm.valid) {
      this.questionService.addQuestion(this.questionForm.value as Question);
      this.router.navigate(['..']);
    }
  }
}
