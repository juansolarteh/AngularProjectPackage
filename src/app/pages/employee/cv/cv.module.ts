import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';
import { RouterModule } from '@angular/router';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';

@NgModule({
  declarations: [
    CvComponent,
    Example1Component,
    Example2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: CvComponent
      }
    ])
  ]
})
export class CvModule { }
