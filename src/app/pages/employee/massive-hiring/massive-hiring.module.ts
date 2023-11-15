import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MassiveHiringComponent } from './massive-hiring.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MassiveHiringComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: MassiveHiringComponent
      }
    ])
  ]
})
export class MassiveHiringModule { }
