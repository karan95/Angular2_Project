import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderAppComponent } from './header/header.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  declarations: [
    AppComponent, HeaderAppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
