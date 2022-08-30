import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Question, QuestionType, SingleQuestion} from "../../models/question";
import {FormBuilder, Validators} from "@angular/forms";
import {QuestionsService} from "../../services/questions.service";
import {ActivatedRoute, Router} from "@angular/router";
import {distinctUntilChanged, distinctUntilKeyChanged, filter, map, Subject, switchMap, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-questionnare-edit',
  templateUrl: './questionnare-edit.component.html',
  styleUrls: ['./questionnare-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionnareEditComponent implements OnInit {

  questionType = QuestionType;

  destroy$ = new Subject<true>();

  stateQuestion!: Question;
  questionForm = this.fb.nonNullable.group({
    description: ['', Validators.required],
    type: [this.questionType.SINGLE]
  });


  ngOnInit() {
    this.route.paramMap.pipe(
      map((params) => params.get('id')),
      distinctUntilChanged(),
      filter(Boolean),
      takeUntil(this.destroy$),
      switchMap(id => this.questionService.getQuestions$().pipe(
        map(questions => questions.find(q => q.id === +id)))
      ),
      tap(question => {
        if (!question) {
          this.router.navigateByUrl('/');
          throw Error;
        }
      }),
    )
    .subscribe(question => this.applyChangesToForm(question))
  }

  applyChangesToForm(question?: Question) {
    if (question) {
      this.stateQuestion = question;
      if (this.questionForm)
      this.questionForm.setValue({
        description: question.description,
        type: question.type,
      } as any);
    }
  }

  get isQuestionWithOptions(): boolean {
    const question = this.questionForm.value;
    return question.type === this.questionType.SINGLE || question.type === this.questionType.MULTIPLE;
  }

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  editQuestion() {
    if (this.questionForm.valid) {
      this.questionService.editQuestion(this.stateQuestion.id, this.questionForm.value as Question);
      this.router.navigate(['/manage']);
    }
  }
}
