import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lead } from './models/lead';

const API_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public getLeadsByUser(userId: number){
    return this.http.get<Lead[]>(API_URL + '/api/leadbyuser/' + userId);
  }
}
