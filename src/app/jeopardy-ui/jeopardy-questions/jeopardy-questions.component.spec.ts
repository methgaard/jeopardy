import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeopardyQuestionsComponent } from './jeopardy-questions.component';

describe('JeopardyQuestionsComponent', () => {
  let component: JeopardyQuestionsComponent;
  let fixture: ComponentFixture<JeopardyQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeopardyQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeopardyQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
