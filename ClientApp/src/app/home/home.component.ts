import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private titleServie: Title) { }

  ngOnInit() {
    this.titleServie.setTitle("Home");
  }

}
