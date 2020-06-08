import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { AdminUsuariosComponent } from './components/admin-usuarios/admin-usuarios.component';
import { LoginUsuariosComponent } from './components/login-usuarios/login-usuarios.component';
import { InfoUsuariosComponent } from './components/info-usuarios/info-usuarios.component';
import { FormUsuarioComponent } from './components/admin-usuarios/form-usuario/form-usuario.component';

import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ContactosComponent } from './components/info-usuarios/contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    AdminUsuariosComponent,
    LoginUsuariosComponent,
    InfoUsuariosComponent,
    FormUsuarioComponent,
    CrearUsuarioComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
