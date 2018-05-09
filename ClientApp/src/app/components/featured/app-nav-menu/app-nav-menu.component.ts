import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './app-nav-menu.component.html',
  styleUrls: ['./app-nav-menu.component.scss']
})
export class AppNavMenuComponent implements OnInit {


  constructor(public titleService: Title) {
  }

  ngOnInit() {
  }

}
