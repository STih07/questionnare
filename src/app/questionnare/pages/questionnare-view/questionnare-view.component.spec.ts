import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnareViewComponent } from './questionnare-view.component';

describe('QuestionnareViewComponent', () => {
  let component: QuestionnareViewComponent;
  let fixture: ComponentFixture<QuestionnareViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnareViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnareViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
