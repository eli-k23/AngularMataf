import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizOverComponent } from './quiz-over.component';

describe('QuizOverComponent', () => {
  let component: QuizOverComponent;
  let fixture: ComponentFixture<QuizOverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizOverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
