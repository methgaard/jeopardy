import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeopardyCategoriesComponent } from './jeopardy-categories.component';

describe('JeopardyCategoriesComponent', () => {
  let component: JeopardyCategoriesComponent;
  let fixture: ComponentFixture<JeopardyCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeopardyCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeopardyCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
