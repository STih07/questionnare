import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-questionnare-list',
  templateUrl: './questionnare-list.component.html',
  styleUrls: ['./questionnare-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionnareListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
