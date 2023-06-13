import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule)
  },
  {
    path: 'candidates',
    loadChildren: () => import('./candidate/candidate.module').then(m => m.CandidateModule)
  },
  {
    path: 'designations',
    loadChildren: () => import('./designation/designation.module').then(m => m.DesignationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
