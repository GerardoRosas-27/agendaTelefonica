import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  user: Usuario = {
    nombre: "",
    correo: "",
    contra: ""
  }
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signUp() {
    console.log(this.user);
    this.authService.signUpUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          alert("! " + res.mensaje + " ¡");
          localStorage.setItem('token', res.token);
          this.router.navigate(['/perfil']);
        },
        err => {
          console.log(err)
          alert("! " + err.error.mensaje + " ¡");
        }

      )
  }

}
