import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lead } from './models/lead';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LeadDialogComponent } from './lead-dialog/lead-dialog.component';
import { LeadTableComponent } from './lead-table/lead-table.component';

const API_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor(
    private http: HttpClient
  ) { }

  workingId: number;

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl('', Validators.required),
    telefone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    opRPA: new FormControl(false),
    opProdDigital: new FormControl(false),
    opAnalytics: new FormControl(false),
    opBPM: new FormControl(false)
  });

  public hardCheck(){
    this.form.get('opRPA').setValue(true);
    this.form.get('opProdDigital').setValue(true);
    this.form.get('opAnalytics').setValue(true);
    this.form.get('opBPM').setValue(true);
  }

  public createLead(userId: number){
    var newLead: Lead;
    newLead = this.form.getRawValue();

    return this.http.post<Lead>(API_URL + '/api/lead/' + userId, newLead);
  }

  public updateLeadStatus( leadX: Lead ){
    return this.http.put<Lead>(API_URL + '/api/updateleadstatus/' + leadX.id, leadX);
  }
}
