import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { RouterModule } from '@angular/router';
import { EmptyLayoutComponent } from './empty-layout/empty-layout.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    EmptyLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
