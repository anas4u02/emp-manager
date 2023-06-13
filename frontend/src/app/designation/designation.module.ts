import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DesignationRoutingModule} from './designation-routing.module';
import {DesignationComponent} from './designation.component';
import {DesignationAddComponent} from "./designation-add/designation-add.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DesignationUpdateComponent} from "./designation-update/designation-update.component";
import {DesignationViewComponent} from "./designation-view/designation-view.component";


@NgModule({
  declarations: [
    DesignationComponent,
    DesignationAddComponent,
    DesignationUpdateComponent,
    DesignationViewComponent
  ],
  imports: [
    CommonModule,
    DesignationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DesignationModule {
}
