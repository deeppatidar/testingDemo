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
  rowData : any;
  name : string;
  quote : string;
  broker : string;
  operator : string;
  notes : string;
  trip: string;
  amount: number;
  totalAmount : any;
  additionalAmount : string;
  sortDirection = "asc";
  constructor() {

  }

  show(rowData:any, modalType: string){
      this.rowData = rowData;
      this.trip = rowData.tripId;
      this.quote =  rowData.paymentAmount;
      this.operator = rowData.operator;
      this.totalAmount = rowData.totalAmount;
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
  }

  hide(modalType: string) {
      this.amount = null;
      this.totalAmount = null;
      if(modalType === 'confirmed') {
          this.confirmedModal.hide();
      } else if (modalType === 'completed') {
          this.completedModal.hide();
      } else {
          this.cancelledModal.hide();
      }
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
