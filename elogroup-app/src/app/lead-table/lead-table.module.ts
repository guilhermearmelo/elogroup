import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadTableComponent } from './lead-table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [LeadTableComponent],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class LeadTableModule { }
