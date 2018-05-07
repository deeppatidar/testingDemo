import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TripService } from './trip.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

  constructor(private titleService: Title, private tripService: TripService) { }

  public result: any;

  ngOnInit() {
    this.titleService.setTitle("Trips Overview");

    this.tripService.pingAuthorized().subscribe(response => this.result = JSON.stringify(response));

  }

}
