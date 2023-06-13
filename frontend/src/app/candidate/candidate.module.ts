import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CandidateRoutingModule} from './candidate-routing.module';
import {CandidateComponent} from "./candidate.component";
import {CandidateAddComponent} from './candidate-add/candidate-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CandidateUpdateComponent} from './candidate-update/candidate-update.component';

@NgModule({
  declarations: [
    CandidateComponent,
    CandidateAddComponent,
    CandidateUpdateComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    ReactiveFormsModule
  ]
})
export class CandidateModule { }
