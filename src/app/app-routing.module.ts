import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JeopardyShellComponent } from './jeopardy-ui/jeopardy-shell/jeopardy-shell.component';

const routes: Routes = [
  {
    path: '',
    component: JeopardyShellComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
