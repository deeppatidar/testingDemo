import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  optionsSelect: any;
  chartType:string = 'line';
  chartDatasets:Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset'},
        {data: [18, 28, 30, 49, 56, 67, 70], label: 'My third dataset'}
    ];
  chartLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  chartColors:Array<any> = [
        {
            backgroundColor: 'rgb(255, 194, 207 , 0.5)',
            borderColor: 'rgb(255, 99, 131 , 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgb(255, 194, 207 , 0.5)',
            pointBorderColor: 'rgb(255, 99, 131 , 1)',
            pointHoverBackgroundColor: 'rgb(255, 194, 207 , 0.5)',
            pointHoverBorderColor: 'rgb(255, 99, 131 , 1)'
        },
        {
            backgroundColor: 'rgb(177, 219, 248 , 0.7)',
            borderColor: 'rgb(78, 174, 237)',
            borderWidth: 2,
            pointBackgroundColor: 'rgb(177, 219, 248 , 0.7)',
            pointBorderColor: 'rgb(78, 174, 237)',
            pointHoverBackgroundColor: 'rgb(177, 219, 248 , 0.7)',
            pointHoverBorderColor: 'rgb(78, 174, 237)'
        },
        {
            backgroundColor: 'rgb(255, 236, 189 , 1)',
            borderColor: 'rgb(255, 208, 90)',
            borderWidth: 2,
            pointBackgroundColor: 'rgb(255, 236, 189 , 1)',
            pointBorderColor: 'rgb(255, 208, 90)',
            pointHoverBackgroundColor: 'rgb(255, 236, 189 , 1)',
            pointHoverBorderColor: 'rgb(255, 208, 90)'
        }
    ];
  // public chartColors:Array<any> = [
  //       {
  //           backgroundColor: 'rgba(220,220,220,0.2)',
  //           borderColor: 'rgba(220,220,220,1)',
  //           borderWidth: 2,
  //           pointBackgroundColor: 'rgba(220,220,220,1)',
  //           pointBorderColor: '#fff',
  //           pointHoverBackgroundColor: '#fff',
  //           pointHoverBorderColor: 'rgba(220,220,220,1)'
  //       },
  //       {
  //           backgroundColor: 'rgba(151,187,205,0.2)',
  //           borderColor: 'rgba(151,187,205,1)',
  //           borderWidth: 2,
  //           pointBackgroundColor: 'rgba(151,187,205,1)',
  //           pointBorderColor: '#fff',
  //           pointHoverBackgroundColor: '#fff',
  //           pointHoverBorderColor: 'rgba(151,187,205,1)'
  //       }
  //   ];

  constructor() { }

  ngOnInit() {
    this.optionsSelect = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
        ];
  }


    public chartOptions:any = {
        responsive: true
    };

    public chartClicked(e: any): void {

    }

    public chartHovered(e: any): void {

    }

}
