import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnareEditComponent } from './questionnare-edit.component';

describe('QuestionnareEditComponent', () => {
  let component: QuestionnareEditComponent;
  let fixture: ComponentFixture<QuestionnareEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnareEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnareEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
