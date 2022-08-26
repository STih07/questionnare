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
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import {RadioButtonModule} from "primeng/radiobutton";
import { CreateOptionsComponent } from './pages/questionnare-create/components/create-options/create-options.component';
import {ChipsModule} from "primeng/chips";

const routes: Routes = [
  { path: '', component: QuestionnareListComponent },
  { path: 'create', component: QuestionnareCreateComponent },
  { path: 'view/:id', component: QuestionnareViewComponent },
  { path: 'edit/:id', component: QuestionnareEditComponent },
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
     CreateOptionsComponent,
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
    ChipsModule
  ]
})
export class QuestionnareModule { }
