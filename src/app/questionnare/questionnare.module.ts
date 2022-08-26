import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnareListComponent } from './pages/questionnare-list/questionnare-list.component';
import { QuestionnareEditComponent } from './pages/questionnare-edit/questionnare-edit.component';
import { QuestionnareCreateComponent } from './pages/questionnare-create/questionnare-create.component';
import { QuestionnareViewComponent } from './pages/questionnare-view/questionnare-view.component';
import {RouterModule, Routes} from "@angular/router";
import {STORAGE} from "./utils/storage.key";
import { FnPipe } from './utils/fn.pipe';
import { AnsweredQuestionsComponent } from './pages/questionnare-list/components/answered-questions/answered-questions.component';
import {
  UnansweredQuestionsComponent
} from "./pages/questionnare-list/components/unanswered-questions/unanswered-questions.component";
import {QuestionsService} from "./services/questions.service";
import {DividerModule} from "primeng/divider";

const routes: Routes = [
  { path: '', component: QuestionnareListComponent },
  { path: ':id', component: QuestionnareViewComponent },
  { path: ':id/edit', component: QuestionnareEditComponent },
  { path: 'create', component: QuestionnareCreateComponent }
];

@NgModule({
  declarations: [
    QuestionnareListComponent,
     QuestionnareEditComponent,
     QuestionnareCreateComponent,
     QuestionnareViewComponent,
     FnPipe,
     AnsweredQuestionsComponent,
     UnansweredQuestionsComponent,
  ],
  providers: [
    { provide: STORAGE, useValue: window.localStorage },
    QuestionsService
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DividerModule
  ]
})
export class QuestionnareModule { }
