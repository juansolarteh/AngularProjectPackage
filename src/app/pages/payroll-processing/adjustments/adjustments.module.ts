import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdjustmentsComponent } from './adjustments.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdjustmentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: AdjustmentsComponent
      }
    ])
  ]
})
export class AdjustmentsModule { }
