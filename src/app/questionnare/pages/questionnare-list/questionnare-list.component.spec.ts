import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnareListComponent } from './questionnare-list.component';

describe('QuestionnareListComponent', () => {
  let component: QuestionnareListComponent;
  let fixture: ComponentFixture<QuestionnareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnareListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
