import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CandidateComponent} from "./candidate.component";
import {CandidateAddComponent} from "./candidate-add/candidate-add.component";
import {CandidateUpdateComponent} from "./candidate-update/candidate-update.component";

const routes: Routes = [
  {path:'', component:CandidateComponent},
  {path:'candidate-add',component:CandidateAddComponent},
  {path:'candidate-update/:id',component:CandidateUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
