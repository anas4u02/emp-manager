import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {DesignationModule} from "./designation/designation.module";
import {HttpClientModule} from "@angular/common/http";
import {CandidateModule} from "./candidate/candidate.module";
import {ExperienceModule} from "./experience/experience.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DesignationModule,
    HttpClientModule,
    CandidateModule,
    ExperienceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
