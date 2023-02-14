import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { LandingComponent } from './landing.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LandingComponent,
    DashbordComponent,
    
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    SharedModule
  ]
})
export class GeneralModule { }
