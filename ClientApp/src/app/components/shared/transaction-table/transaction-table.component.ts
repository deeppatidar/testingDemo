import { Component, OnInit , Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent implements OnInit {
  @Input() tableData : Array<any>;
  @Input() search : any;
  @Input() optionsSelect : Array<any>;
  @Input() activeUrl : string;
  @ViewChild('confirmed') public confirmedModal;
  @ViewChild('completed') public completedModal;
  @ViewChild('cancelled') public cancelledModal;
  @ViewChild('successed') public successdModal;
  rowData : any;
  name : string;
  quote : number;
  broker : string;
  operator : string;
  notes : string;
  trip: string;
  amount: number;
  totalAmount : any;
  paymentAmount : any;
  additionalAmount : string;
  sortDirection = "asc";
  additionalAmountFlag: number = 1;
  estimatedHrs: string;
  actualHrs: string;
  message: string;
  screenName: string;
  constructor() {

  }

  show(rowData:any, modalType: string){
      this.rowData = rowData;
      this.trip = rowData.tripId;
      this.quote =  rowData.paymentAmount;
      this.operator = rowData.operator;
      this.totalAmount = rowData.totalAmount;
      this.estimatedHrs = rowData.estimatedHrs;
      this.actualHrs = rowData.actualHrs;
      this.paymentAmount = rowData.paymentAmount;
      this.additionalAmount =  '';
      if(modalType === 'confirmed') {
          this.confirmedModal.show();
      } else if (modalType === 'completed') {
          this.completedModal.show();
      } else {
          this.cancelledModal.show();
      }
  }


  addAmount(addAmount: number) {
    var temp = this.rowData.totalAmount.toString().replace(',','');
    this.totalAmount = parseFloat(temp) + addAmount;
    if(this.totalAmount > this.quote) {
      this.additionalAmountFlag = 2;
    } else if (this.totalAmount < this.quote) {
        this.additionalAmountFlag = 3;
    }
    console.log(this.additionalAmountFlag);
  }

  hide(modalType: string) {
    console.log(modalType);
      this.amount = null;
      this.totalAmount = null;
      if(modalType === 'confirmed') {
          this.confirmedModal.hide();
      } else if (modalType === 'completed') {
          this.completedModal.hide();
      } else if(modalType === 'cancelled') {
          this.cancelledModal.hide();
      } else {
          this.successdModal.hide();
      }
  }

  releaseAmount(message: string, screen: string) {
    console.log(screen);
    this.message = message;
    this.screenName = screen;
    if(screen === 'confirmed') {
        this.confirmedModal.hide();
    } else if(screen === 'completed') {
        this.completedModal.hide();
    } else {
      this.cancelledModal.hide();
    }
    this.successdModal.show();
  }

  ngOnInit() {
  }

  toggle(row) {
    if(row.detail) {
      row.toggle = !row.toggle;
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

}
