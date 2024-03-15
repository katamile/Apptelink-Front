import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'https://localhost:44334/api/Usuario/login';

  constructor(private http: HttpClient) {}

  login(user: Usuario){
      return this.http.post(this.baseUrl, user);
  }

  get getUsername(){
      return localStorage.getItem('userName');
  }

  get isAutenticado(){
      return !!localStorage.getItem('token');
  }
}
