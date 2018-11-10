import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JeopardyShellComponent } from './jeopardy-shell/jeopardy-shell.component';
import { JeopardyGridComponent } from './jeopardy-grid/jeopardy-grid.component';
import { JeopardyCategoriesComponent } from './jeopardy-categories/jeopardy-categories.component';
import { JeopardyCardComponent } from './jeopardy-card/jeopardy-card.component';
import { JeopardyQuestionsComponent } from './jeopardy-questions/jeopardy-questions.component';

@NgModule({
  declarations: [
    JeopardyShellComponent,
    JeopardyGridComponent,
    JeopardyCategoriesComponent,
    JeopardyCardComponent,
    JeopardyQuestionsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class JeopardyUiModule { }
