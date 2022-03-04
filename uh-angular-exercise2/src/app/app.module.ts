import { CreateFormModule } from './create-form/create-form.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreateFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }