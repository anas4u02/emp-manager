import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DesignationComponent} from "./designation.component";
import {DesignationAddComponent} from "./designation-add/designation-add.component";
import {DesignationViewComponent} from "./designation-view/designation-view.component";
import {DesignationUpdateComponent} from "./designation-update/designation-update.component";

const routes: Routes = [
  {
    path: '',
    component: DesignationComponent
  },
  {path: 'designation-add', component: DesignationAddComponent},
  {path: 'designation-view', component: DesignationViewComponent},
  {path: 'designation-update/:id', component: DesignationUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationRoutingModule {
}
