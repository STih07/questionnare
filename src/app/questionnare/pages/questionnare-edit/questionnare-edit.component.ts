import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-questionnare-edit',
  templateUrl: './questionnare-edit.component.html',
  styleUrls: ['./questionnare-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionnareEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
