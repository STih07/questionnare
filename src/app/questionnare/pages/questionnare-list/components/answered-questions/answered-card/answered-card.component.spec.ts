import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsweredCardComponent } from './answered-card.component';

describe('AnsweredCardComponent', () => {
  let component: AnsweredCardComponent;
  let fixture: ComponentFixture<AnsweredCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnsweredCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnsweredCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
