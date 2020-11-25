import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LeadDialogComponent } from '../lead-dialog/lead-dialog.component';
import { Lead } from '../models/lead';
import { UserService } from '../user.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { 

  }

  ngOnInit(): void { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
 
    this.dialog.open(LeadDialogComponent, dialogConfig);
  }
}
