import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomComponent} from './custom.component';
import {CustomSecondComponent} from './customsecond.component';
import {CustomThirdComponent} from './customthird.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponent,
    CustomSecondComponent,
    CustomThirdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
