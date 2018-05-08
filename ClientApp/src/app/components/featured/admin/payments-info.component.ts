import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AppServices } from '../../../services/http/app.services';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { TabsetComponent } from 'ng-mdb-pro/pro/tabs-pills/tabset.component';
import { Router } from '@angular/router';


@Component({
  selector: 'flight-cmd-payments-info',
  templateUrl: './payments-info.component.html',
  styleUrls: ['./payments-info.component.scss'],
  //encapsulation: ViewEncapsulation.None
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
  activeUrl: string;
  tripCounts: any;

  cardData: any = [
    { title: "Account Balance" , percent: 25 , value: "$200,000" , icon: "fa fa-usd" },
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
    this.activeUrl = this.router.url;


    this.appServices.getTripCount().subscribe(
      data => {
          this.tripCounts = data;
      },
      (err: HttpErrorResponse) => {
        console.log (err);
      }
    );

    if(this.router.url === "/admin/confirmed-trip") {
      this.staticTabs.tabs[0].active=true;
      this.appServices.getConfirmedTransactionData().subscribe(
        data => {
           this.tableData = data.map((value)=> {
            value['toggle']=false;
            for (let key in value) {

              if(value[key]== '' && key != "toggle") {
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
    }  else if (this.router.url === "/admin/completed-trip") {
      this.staticTabs.tabs[1].active=true;
      this.appServices.getCompletedTransactionData().subscribe(
        data => {
           this.tableData = data.map((value)=> {
            value['toggle']=false;
            for (let key in value) {

              if(value[key]== '' && key != "toggle") {
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
    } else if(this.router.url === "/admin/cancelled-trip") {
      this.staticTabs.tabs[2].active=true;
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
    } else {
      this.staticTabs.tabs[3].active=true;
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

  changeTab(tabIndex) {
    this.router.navigate(['/admin/'+tabIndex]);
  }

}
