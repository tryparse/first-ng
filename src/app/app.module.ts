import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CatsComponent } from './components/cats/cats.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { YearformatPipe } from './pipes/yearformat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    LanguagesComponent,
    YearformatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
