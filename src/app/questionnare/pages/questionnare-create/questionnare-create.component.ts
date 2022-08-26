import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-questionnare-create',
  templateUrl: './questionnare-create.component.html',
  styleUrls: ['./questionnare-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionnareCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
