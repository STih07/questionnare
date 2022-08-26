import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnareCreateComponent } from './questionnare-create.component';

describe('QuestionnareCreateComponent', () => {
  let component: QuestionnareCreateComponent;
  let fixture: ComponentFixture<QuestionnareCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnareCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnareCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
