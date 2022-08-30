import { Component, OnInit } from '@angular/core';
import {QuestionsService} from "../../services/questions.service";
import {map} from "rxjs";
import {Question} from "../../models/question";
import {Router} from "@angular/router";

@Component({
  selector: 'app-questionnare-management',
  templateUrl: './questionnare-management.component.html',
  styleUrls: ['./questionnare-management.component.scss']
})
export class QuestionnareManagementComponent {


  questions$ = this.questionService.getQuestions$().pipe(
    map(q => q.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1))
  );

  constructor(private questionService: QuestionsService, private router: Router) { }


  onDeleteClick(question: Question) {
    this.questionService.removeQuestion(question.id);
  }

  onEditClick(question: Question) {
    this.router.navigateByUrl(`/edit/${question.id}`);
  }
}
