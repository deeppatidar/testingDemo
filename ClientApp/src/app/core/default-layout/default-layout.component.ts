import { Component, OnInit } from '@angular/core';
import { NavMenuComponent } from './../nav-menu/nav-menu.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'flt-cmd-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
  }

}
