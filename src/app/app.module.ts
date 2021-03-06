import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scene1Component } from './components/scene1/scene1.component';
import { RainComponent } from './components/rain/rain.component';

@NgModule({
  declarations: [
    AppComponent,
    Scene1Component,
    RainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
