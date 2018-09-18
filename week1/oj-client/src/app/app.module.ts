import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routingModule} from './app.routes'

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';

import {DataService} from './services/data.service';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent
  ],
  imports: [
    BrowserModule,
    routingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
