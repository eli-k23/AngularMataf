import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterEditorComponent } from './components/counter-editor/counter-editor.component';
import { CounterPresenterComponent } from './components/counter-presenter/counter-presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterEditorComponent,
    CounterPresenterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
