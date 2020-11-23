import { Component, OnInit } from '@angular/core';
import { CdkDragEnter, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { UserService } from '../user.service';
import { Lead } from '../models/lead';
import { ActivatedRoute } from '@angular/router';

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

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
        this.leadX = event.container.data as unknown as Lead;
        console.log(this.leadX.nome);
    }
  }

  // entered(event: CdkDragEnter<string[]>) {
  //   console.log('Olá' + event.currentIndex);
  //   //console.log('Moveu item: ', event.item);
  // }

}
