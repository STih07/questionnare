import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnareListComponent } from './pages/questionnare-list/questionnare-list.component';
import { QuestionnareEditComponent } from './pages/questionnare-edit/questionnare-edit.component';
import { QuestionnareCreateComponent } from './pages/questionnare-create/questionnare-create.component';
import { QuestionnareViewComponent } from './pages/questionnare-view/questionnare-view.component';
import {RouterModule, Routes} from "@angular/router";


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
     QuestionnareViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class QuestionnareModule { }
