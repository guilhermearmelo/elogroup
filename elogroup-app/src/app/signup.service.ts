import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { User } from './models/user';

const API_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient
  ) { }

  checkUserNameTaken(userName: string){
    return this.http.get(API_URL + '/api/isAUser/' + userName);
  }

  signup(newUser: User){
    var userData = {
      "nome": newUser.userName,
      "senha": newUser.password
    }
    return this.http.post(API_URL + '/api/usuario/' , userData);
  }

  matchValues( matchTo: string ) : (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value
        ? null
        : { isMatching: false };
    };
}
}
