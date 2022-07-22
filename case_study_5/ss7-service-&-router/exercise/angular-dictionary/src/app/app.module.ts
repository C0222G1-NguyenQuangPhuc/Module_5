import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListWordComponent } from './dictionary/list-word/list-word.component';
import { DictionaryDetailComponent } from './dictionary/dictionary-detail/dictionary-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListWordComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
