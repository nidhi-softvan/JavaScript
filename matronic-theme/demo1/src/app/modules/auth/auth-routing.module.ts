import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SigninpageComponent } from './components/signinpage/signinpage.component';
import { SignuppageComponent } from './components/signuppage/signuppage.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'Signin',
        pathMatch: 'full',
      },
      {
        path: 'Signin',
        component: SigninpageComponent,
        data: { returnUrl: window.location.pathname },
      },
      {
        path: 'Signup',
        component: SignuppageComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      { path: '', redirectTo: 'Signin', pathMatch: 'full' },
      { path: '**', redirectTo: 'Signin', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
