import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnansweredCardComponent } from './unanswered-card.component';

describe('UnansweredCardComponent', () => {
  let component: UnansweredCardComponent;
  let fixture: ComponentFixture<UnansweredCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnansweredCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnansweredCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
