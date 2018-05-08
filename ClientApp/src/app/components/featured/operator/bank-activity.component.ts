import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../../services/http/app.services';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'flight-cmd-bank-activity',
  templateUrl: './bank-activity.component.html',
  styleUrls: ['./bank-activity.component.scss']
})
export class BankActivityComponent implements OnInit {
  optionsSelect: Array<any>;
  tableData: any;
  sortDirection = "asc";
  startDate: any;
  endDate : any;
  search: string;
  model: string;
  model1: any;
  tripDetail= { "confirm": 1 , "completed": 4 , "cancelled": 10  };

  cardData: any = [
    { title: "Available Balance" , percent: 25 , value: "$180,000" , icon: "fa fa-usd" },
    { title: "Pending" , percent: 25 , value: "$70,000" , icon: "fa fa-usd" },
    { title: "Current Balance" , percent: 25 , value: "$250,000" , icon: "fa fa-usd" },
  ];
  paymentDetail = {
    paymentacc: "#0001" , BBVAacc: "01239" , BBVATypeChecking: "Checking"
  };
  constructor(private appServices: AppServices) { }

  ngOnInit() {
    let arr = [];
    this.optionsSelect = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
        ];
    this.appServices.getOperatorBankActivityData().subscribe(
      data => {
        console.log(data);
         this.tableData = data.map((value)=> {
          value['toggle']=false;
          for (let key in value) {

            if(value[key]== '' && key != "toggle") {
              console.log(key);
              value[key]="-";
            }
          }
          return value;
        });
      },
      (err: HttpErrorResponse) => {
        console.log (err);
      }
    );
  }
  sortData(key) {
    this.tableData.sort((a: any, b: any): any => {
        return (this.sortDirection == 'asc' ? (a[key] > b[key]) : (a[key] < b[key]));
    });
    if(this.sortDirection == "asc") {
      this.sortDirection = "desc";
    }
    else {
      this.sortDirection = "asc";
    }
  }

  toggle(row) {
    if(row.detail) {
      row.toggle = !row.toggle;
    }
  }
}
