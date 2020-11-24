import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lead } from './models/lead';

const API_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor(
    private http: HttpClient
  ) { }

  public updateLeadStatus( leadX: Lead ){
    return this.http.put<Lead>(API_URL + '/api/updateleadstatus/' + leadX.id, leadX);
  }
}
