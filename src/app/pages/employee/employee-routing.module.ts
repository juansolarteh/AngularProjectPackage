import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "cv",
    pathMatch: "full",
    loadChildren: () => import("./cv/cv.module").then(m => m.CvModule),
    data: { preload: true }
  },
  {
    path: "mas",
    pathMatch: "full",
    loadChildren: () => import("./massive-hiring/massive-hiring.module").then(m => m.MassiveHiringModule)
  },
  {
    path: "**",
    redirectTo: "/home"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
