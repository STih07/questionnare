import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnareListComponent } from './pages/questionnare-list/questionnare-list.component';
import { QuestionnareEditComponent } from './pages/questionnare-edit/questionnare-edit.component';
import { QuestionnareCreateComponent } from './pages/questionnare-create/questionnare-create.component';
import {RouterModule, Routes} from "@angular/router";
import {STORAGE} from "./utils/storage.key";
import { FnPipe } from './utils/fn.pipe';
import { AnsweredQuestionsComponent } from './pages/questionnare-list/components/answered-questions/answered-questions.component';
import {
  UnansweredQuestionsComponent
} from "./pages/questionnare-list/components/unanswered-questions/unanswered-questions.component";
import {QuestionsService} from "./services/questions.service";
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RadioButtonModule} from "primeng/radiobutton";
import { CreateOptionsComponent } from './pages/questionnare-create/components/create-options/create-options.component';
import {ChipsModule} from "primeng/chips";
import {CardModule} from "primeng/card";
import {SelectButtonModule} from "primeng/selectbutton";
import { UnansweredCardComponent } from './pages/questionnare-list/components/unanswered-questions/unanswered-card/unanswered-card.component';
import { OptionPipe } from './utils/option.pipe';
import { AnsweredCardComponent } from './pages/questionnare-list/components/answered-questions/answered-card/answered-card.component';
import { QuestionnareManagementComponent } from './pages/questionnare-management/questionnare-management.component';
import { QuestionTypePipe } from './utils/question-type.pipe';

const routes: Routes = [
  { path: '', component: QuestionnareListComponent },
  { path: 'create', component: QuestionnareCreateComponent },
  { path: 'edit/:id', component: QuestionnareEditComponent },
  { path: 'manage', component: QuestionnareManagementComponent }
];

@NgModule({
  declarations: [
    QuestionnareListComponent,
     QuestionnareEditComponent,
     QuestionnareCreateComponent,
     FnPipe,
     AnsweredQuestionsComponent,
     UnansweredQuestionsComponent,
     CreateOptionsComponent,
     UnansweredCardComponent,
     OptionPipe,
     AnsweredCardComponent,
     QuestionnareManagementComponent,
     QuestionTypePipe,
  ],
  providers: [
    { provide: STORAGE, useValue: window.localStorage },
    QuestionsService
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DividerModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    ReactiveFormsModule,
    RadioButtonModule,
    ChipsModule,
    CardModule,
    SelectButtonModule,
    FormsModule
  ]
})
export class QuestionnareModule { }
