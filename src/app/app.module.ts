import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent } from './app.component';
import {HeaderComponent} from './header.component';
import {NavBarComponent} from './navbar.component';
import {MainComponent} from './main.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent,NavBarComponent , MainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
