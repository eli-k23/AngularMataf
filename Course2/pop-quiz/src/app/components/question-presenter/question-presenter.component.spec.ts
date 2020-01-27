import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPresenterComponent } from './question-presenter.component';

describe('QuestionPresenterComponent', () => {
  let component: QuestionPresenterComponent;
  let fixture: ComponentFixture<QuestionPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
