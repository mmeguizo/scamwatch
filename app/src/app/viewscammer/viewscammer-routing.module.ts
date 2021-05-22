import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
// import { LoginComponent } from './login.component';
import { NotAuthGuard } from '../guard/notAuth.guard';
import { ViewscammerComponent } from './viewscammer.component';

const routes: Routes = [
  {
    path: '',
    component: ViewscammerComponent
    ,
    // canActivate: [NotAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewScammerRoutingModule { }
