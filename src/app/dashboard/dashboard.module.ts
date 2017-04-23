import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RbDashboardComponent, RbDashboardComponentRouting }   from 'rb-dashboard-component';
import { RbMeterComponent } from 'rb-meter';
import { RbListService }   from 'rb-list-service';

@NgModule({
  imports: [
    CommonModule,
    RbDashboardComponentRouting
  ]
  , declarations: [RbDashboardComponent, RbMeterComponent]
  , exports: [RbDashboardComponent]
  , providers: [RbListService]
})
export class DashboardModule { }
