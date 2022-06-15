import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiginComponent } from './sigin/sigin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'Signin'
  },
  {
    path:'Signin',component:SiginComponent
  },
  {
    path:'Signup',component:SignupComponent
  },
  {
    path:'users',
    component:UsersComponent,
  },
  {
    path:'tickets',component:DashboardComponent,canActivate:[AuthGuard],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
