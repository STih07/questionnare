import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnareManagementComponent } from './questionnare-management.component';

describe('QuestionnareManagementComponent', () => {
  let component: QuestionnareManagementComponent;
  let fixture: ComponentFixture<QuestionnareManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnareManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionnareManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
