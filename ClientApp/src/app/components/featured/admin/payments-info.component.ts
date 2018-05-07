import { Component, OnInit, ViewChild } from '@angular/core';
import { AppServices } from '../../services/http/app.services';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { TabsetComponent } from 'ng-mdb-pro/pro/tabs-pills/tabset.component';
import { Router } from '@angular/router';

@Component({
  selector: 'flight-cmd-payments-info',
  templateUrl: './payments-info.component.html',
  styleUrls: ['./payments-info.component.scss']
})
export class PaymentsInfoComponent implements OnInit {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  optionsSelect: Array<any>;
  tableData: any;
  sortDirection = "asc";
  startDate: any;
  endDate : any;
  search: string;
  model: string;
  model1: any;
  tripDetail= { "confirm": 5 , "completed": 5 , "cancelled": 5  };

  cardData: any = [
    { title: "Account Balance" , percent: 25 , value: "$200,000" , icon: "fa fa-money" },
  ];
  paymentDetail = {
    paymentacc: "#0001" , BBVAacc: "01239" , BBVATypeChecking: "Checking"
  };
  constructor(private appServices: AppServices, private router: Router) { }

  ngOnInit() {
    let arr = [];
    this.optionsSelect = [
            { value: '1', label: '318953' },
            { value: '2', label: '318954' },
            { value: '3', label: '318956' },
        ];
    this.staticTabs.tabs[0].active=true;

    console.log(this.router.url);

    this.appServices.getConfirmedTransactionData().subscribe(
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

    this.appServices.getCompletedTransactionData().subscribe(
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

    this.appServices.getCancelledTransactionData().subscribe(
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

    this.appServices.getGeneralLedgerTransactionData().subscribe(
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

}
