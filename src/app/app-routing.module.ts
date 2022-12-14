import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { AuthGuardian } from './utils/auth-guardian';


const routes: Routes = [
  {
    path:'',redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,canActivate:[AuthGuardian]
  },
  {
    path:'registrar-usuario',
    component:RegistrarUsuarioComponent
  },
  {
    path:'verificar-correo',
    component:VerificarCorreoComponent
  },
  {
    path:'recuperar-password',
    component:RecuperarPasswordComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  
  {
    path:'**',
    component:DashboardComponent
  },


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {

 }
