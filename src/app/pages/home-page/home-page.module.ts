import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: HomePageComponent
      }
    ])
  ]
})
export class HomePageModule { }
