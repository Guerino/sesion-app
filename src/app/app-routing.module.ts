import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

//Primero importar la guardia
import { AuthorizationGuard } from './services/authorization.guard';

const routes: Routes = [
  { path: '' , component:HomeComponent },
  { path: 'home' , component:HomeComponent },
  { path: 'login' , component:LoginComponent },

  //Luego proteger la ruta
  { path: 'dashboard' , component:DashboardComponent, canActivate: [AuthorizationGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
