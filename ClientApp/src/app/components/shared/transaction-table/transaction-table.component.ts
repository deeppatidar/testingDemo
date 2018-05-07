import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent implements OnInit {
  @Input() tableData : Array<any>;
  @Input() search : any;
  sortDirection = "asc";
  constructor() {

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
