import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionPageComponent } from './session-page/session-page.component';
import { RouterModule } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    SessionPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: SessionPageComponent
      }
    ])
  ],
  exports: [
    SessionPageComponent
  ]
})
export class AuthModule { }
