import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "home",
    pathMatch: "full",
    loadChildren: () => import("./home-page/home-page.module").then(m => m.HomePageModule),
  },
  {
    path: "emp",
    loadChildren: () => import("./employee/employee.module").then(m => m.EmployeeModule)
  },
  {
    path: "pay",
    children: [
      {
        path: "adj",
        pathMatch: "full",
        loadChildren: () => import("./payroll-processing/adjustments/adjustments.module").then(m => m.AdjustmentsModule),
        data: { preload: true }
      },
      {
        path: "pay",
        pathMatch: "full",
        loadChildren: () => import("./payroll-processing/payroll/payroll.module").then(m => m.PayrollModule)
      },
      {
        path: "**",
        redirectTo: "/home"
      }
    ],
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
