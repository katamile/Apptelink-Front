import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Interfaces/usuario';
import { AuthService } from 'src/app/Services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private service: AuthService, private router: Router) {}

  inicioSesion = new FormGroup({
    Username: new FormControl('',Validators.required),
    Password: new FormControl('',Validators.required)
  });

  alert: boolean = false; 
  usuarioTemp: any;
  passwordTemp: any;

  ngOnInit(): void {
    localStorage.removeItem('token'); // Limpiar el token al cargar la página
  }

  cargar() {
    this.usuarioTemp = this.inicioSesion.value.Username;
    this.passwordTemp = this.inicioSesion.value.Password;
    
    this.service.login(this.inicioSesion.value as Usuario).subscribe((data: any) => {   
      localStorage.setItem('userName', this.usuarioTemp);
      localStorage.setItem('token', data.token);
      if (data != null) {
        this.router.navigate(['/principal']);
      } else {
        this.alert = true;
      }
    },
    (errorData) => alert(errorData.error));
  }   
}
