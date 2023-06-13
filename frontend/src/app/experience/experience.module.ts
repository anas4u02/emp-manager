import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExperienceRoutingModule} from './experience-routing.module';
import {ExperienceComponent} from "./experience.component";
import {ExperienceAddComponent} from './experience-add/experience-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ExperienceUpdateComponent} from './experience-update/experience-update.component';


@NgModule({
  declarations: [
    ExperienceComponent,
    ExperienceAddComponent,
    ExperienceUpdateComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    ReactiveFormsModule
  ]
})
export class ExperienceModule {
}
