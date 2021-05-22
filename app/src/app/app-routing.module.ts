import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'viewscammer', loadChildren: 'app/viewscammer/viewscammer.module#ViewscammerModule' },
  // { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canActivate: [AuthGuard] },
  // { path: 'hr', loadChildren: 'app/hr/hr.module#HrModule', canActivate: [AuthGuard] },
  // { path: 'employee', loadChildren: 'app/employee/employee.module#EmployeeModule', canActivate: [AuthGuard] },
  { path: '', redirectTo: 'viewscammer', pathMatch: 'full' },
  { path: '**', redirectTo: 'viewscammer' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
