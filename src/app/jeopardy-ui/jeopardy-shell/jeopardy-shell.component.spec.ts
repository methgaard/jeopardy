import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeopardyShellComponent } from './jeopardy-shell.component';

describe('JeopardyShellComponent', () => {
  let component: JeopardyShellComponent;
  let fixture: ComponentFixture<JeopardyShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeopardyShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeopardyShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
