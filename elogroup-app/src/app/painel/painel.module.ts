import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel.component';
import { LeadTableComponent } from '../lead-table/lead-table.component';

@NgModule({
  declarations: [PainelComponent],
  imports: [
    CommonModule,
    LeadTableComponent
  ]
})
export class PainelModule { }