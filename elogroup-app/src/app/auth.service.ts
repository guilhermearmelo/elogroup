import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  authenticate(userName: string, password: string){
    return this.http.post(API_URL + '/api/login', { nome: userName , senha: password } );
  }
}
