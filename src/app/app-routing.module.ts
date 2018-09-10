import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//rutas
import { HomePageComponent } from "./components/home-page/home-page.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";
import { RegisterPageComponent } from "./components/register-page/register-page.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

import { AuthGuard } from "./guards/auth.guard";
import { NoAuthGuard } from "./guards/no-auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterPageComponent, canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [NoAuthGuard] },
  { path: '**', component: NotFoundPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
