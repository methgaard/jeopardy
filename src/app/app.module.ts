import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JeopardyUiModule } from './jeopardy-ui/jeopardy-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JeopardyUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
