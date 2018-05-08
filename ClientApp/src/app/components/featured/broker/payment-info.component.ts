import { Component, OnInit } from '@angular/core';
import { AppServices } from '../../../services/http/app.services';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'flight-cmd-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss']
})
export class PaymentInfoComponent implements OnInit {
  tableData: any;
  sortDirection = "asc";
  startDate: any;
  endDate : any;
  search: string;
  model: string;
  model1: any;
  tripDetail= { "confirm": 1 , "completed": 4 , "cancelled": 10  };

  cardData: any = [
    { title: "Available Balance" , percent: 25 , value: "$200,000" , icon: "fa fa-usd" },
    { title: "Pending" , percent: 25 , value: "$20,000" , icon: "fa fa-usd" },
    { title: "Current Balance" , percent: 25 , value: "$220,000" , icon: "fa fa-usd" },
  ];
  paymentDetail = {
    paymentacc: "#0001" , BBVAacc: "01239" , BBVATypeChecking: "Checking"
  };
  constructor(private appServices: AppServices) { }

  ngOnInit() {
    let arr = [];
    this.appServices.getBrokerBankActivityData().subscribe(
      data => {
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
