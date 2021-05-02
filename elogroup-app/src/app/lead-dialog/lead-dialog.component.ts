import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    console.log(this.leadService.workingId);
  }

  openSnackBarSuccess() {
    this._snackBar.open("Lead Incluído com Sucesso!", "Ok!");
  }

  onSubmit(){
    if(this.leadService.form.valid){
      
      this.leadService
        .createLead(this.leadService.workingId)
        .subscribe( res => {
          console.log(res);
          this.openSnackBarSuccess();
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
