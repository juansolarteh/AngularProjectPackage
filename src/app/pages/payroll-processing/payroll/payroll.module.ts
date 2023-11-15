import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayrollComponent } from './payroll.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PayrollComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: PayrollComponent
      }
    ])
  ]
})
export class PayrollModule { }
