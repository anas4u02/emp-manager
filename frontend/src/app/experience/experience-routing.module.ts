import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExperienceComponent} from "./experience.component";
import {ExperienceAddComponent} from "./experience-add/experience-add.component";
import {ExperienceUpdateComponent} from "./experience-update/experience-update.component";

const routes: Routes = [
  {path: '', component: ExperienceComponent},
  {path: 'experience-add', component: ExperienceAddComponent},
  {path: 'experience-update/:id', component: ExperienceUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule {
}
