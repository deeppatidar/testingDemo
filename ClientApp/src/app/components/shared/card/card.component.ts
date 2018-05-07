import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardTitle: string;
  @Input() cardValue: string;
  @Input() progressPercent: number;
  @Input() cardIcon: string;
  constructor() {
  }

  ngOnInit() {
  }

}
