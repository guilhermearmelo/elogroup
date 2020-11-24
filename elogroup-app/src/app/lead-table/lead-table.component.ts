import { Component, OnInit } from '@angular/core';
import { CdkDragEnter, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { UserService } from '../user.service';
import { Lead } from '../models/lead';
import { ActivatedRoute } from '@angular/router';
import { LeadService } from '../lead.service';

@Component({
  selector: 'app-lead-table',
  templateUrl: './lead-table.component.html',
  styleUrls: ['./lead-table.component.scss']
})
export class LeadTableComponent implements OnInit {

  leadX: Lead;

  leadList: Lead[] = [];

  lista1: Lead[] = [];

  lista2: Lead[] = [];

  lista3: Lead[] = [];

  constructor( 
    private userService: UserService,
    private leadService: LeadService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    const userId = this.activatedRoute.snapshot.params.id;

    this.userService
      .getLeadsByUser(userId)
      .subscribe(leads => {
        this.leadList = leads;
        this.selectLeads();
      });
  }

  drop(event: CdkDragDrop<string[]>) {

    var lista1Length = this.lista1.length;
    var lista2Length = this.lista2.length;
    var lista3Length = this.lista3.length;
    var update = false;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
      event.currentIndex);
      
      var lista1NewLength = this.lista1.length;
      var lista2NewLength = this.lista2.length;
      var lista3NewLength = this.lista3.length;

      // transfer from (1 to 2) or (2 to 3)
      if(lista1Length > lista1NewLength && lista2Length < lista2NewLength){
        this.leadX = event.container.data[0] as unknown as Lead;
        for(const x of this.lista2){
          if(x.id == this.leadX.id){
            x.status+=1;
          }
        }
        update = true;
      } else if(lista2Length > lista2NewLength && lista3Length < lista3NewLength){ // transfer from 2 to 3
        this.leadX = event.container.data[0] as unknown as Lead;
        for(const x of this.lista3){
          if(x.id == this.leadX.id){
            x.status+=1;
          }
        }
        update = true;
      }
      
      if(update){
        update = false;
        this.leadService
          .updateLeadStatus(this.leadX)
          .subscribe(res => {
            for(const x of this.leadList){
              if(x.id == res.id){
                x.status++;
              }
            }
            //this.selectLeads();
          });
      }

    }

  }

  selectLeads(){
    for(const x of this.leadList){

      if(x.status == 0){
        this.lista1.push(x);
      }
      else if(x.status == 1){
        this.lista2.push(x);
      }
      else if(x.status == 2){
        this.lista3.push(x);
      }
    }
    console.log(this.lista1);
    console.log(this.lista2);
    console.log(this.lista3);
  }

}
