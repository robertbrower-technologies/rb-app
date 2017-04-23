import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RbListComponent, RbListComponentRouting } from 'rb-list-component';
import { RbListService } from 'rb-list-service';

@NgModule({
  imports: [
    CommonModule,
    RbListComponentRouting
  ]
  , declarations: [RbListComponent]
  , exports: [RbListComponent]
  , providers: [RbListService]
})
export class ListModule { }