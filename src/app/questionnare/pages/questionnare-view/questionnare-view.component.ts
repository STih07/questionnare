import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-questionnare-view',
  templateUrl: './questionnare-view.component.html',
  styleUrls: ['./questionnare-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionnareViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
