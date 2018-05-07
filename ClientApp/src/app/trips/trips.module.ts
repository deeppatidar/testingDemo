import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TripsComponent } from './trips.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { TripService } from './trip.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TripsComponent, TripListComponent, TripDetailComponent],
  providers: [
    HttpClient,
    TripService
  ]
})
export class TripsModule { }
