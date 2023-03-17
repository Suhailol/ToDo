import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { OptionsComponent } from './options/options.component';
import { InputComponent } from './input/input.component';
import { AlldataComponent } from './alldata/alldata.component';
import { ActiveComponent } from './active/active.component';
import { CompletedComponent } from './completed/completed.component';
import { ActivechildComponent } from './activechild/activechild.component';
import {FormsModule} from "@angular/forms";
import { CompletedchildComponent } from './completedchild/completedchild.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    OptionsComponent,
    InputComponent,
    AlldataComponent,
    ActiveComponent,
    CompletedComponent,
    ActivechildComponent,
    CompletedchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
