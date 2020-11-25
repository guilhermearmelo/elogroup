import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { LeadService } from '../lead.service';

@Component({
  selector: 'app-lead-dialog',
  templateUrl: './lead-dialog.component.html',
  styleUrls: ['./lead-dialog.component.scss']
})
export class LeadDialogComponent implements OnInit {

  constructor(
    public leadService: LeadService,
    public dialogRef: MatDialogRef<LeadDialogComponent>,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.leadService.workingId);
  }

  onSubmit(){
    if(this.leadService.form.valid){
      
      this.leadService
        .createLead(this.leadService.workingId)
        .subscribe( res => {
          console.log(res)
        }, err => {
          console.log(err)
      });
      // notificar inclusao do lead
      this.leadService.form.reset();
      this.onClose();
    }
  }

  onClose(){
    this.leadService.form.reset();
    this.dialogRef.close();
  }

}
