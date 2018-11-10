import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeopardyGridComponent } from './jeopardy-grid.component';

describe('JeopardyGridComponent', () => {
  let component: JeopardyGridComponent;
  let fixture: ComponentFixture<JeopardyGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeopardyGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeopardyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
