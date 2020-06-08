import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login-usuarios',
  templateUrl: './login-usuarios.component.html',
  styleUrls: ['./login-usuarios.component.css']
})
export class LoginUsuariosComponent implements OnInit {

  user: Usuario = {
    contra:"",
    correo:""
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn() {
    console.log(this.user);
    this.authService.signInUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/perfil']);
        },
        err =>{
          console.log(err)
          alert("! " + err.error.mensaje + " ¡");
        } 
        
      )
  }

}
