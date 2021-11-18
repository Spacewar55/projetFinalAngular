import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelecteurBateauComponent } from './selecteur-bateau/selecteur-bateau.component';

@NgModule({
  declarations: [
    AppComponent,
    SelecteurBateauComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
