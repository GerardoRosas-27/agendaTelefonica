import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginUsuariosComponent } from "./components/login-usuarios/login-usuarios.component";
import { CrearUsuarioComponent } from "./components/crear-usuario/crear-usuario.component";
import { InfoUsuariosComponent } from "./components/info-usuarios/info-usuarios.component";
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: LoginUsuariosComponent
  },
  {
    path: 'signup',
    component: CrearUsuarioComponent
  },
  {
    path: 'perfil',
    component: InfoUsuariosComponent,
    canActivate: [AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
