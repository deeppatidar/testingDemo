import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'flight-cmd-general-ledger-table',
  templateUrl: './general-ledger-table.component.html',
  styleUrls: ['./general-ledger-table.component.scss']
})
export class GeneralLedgerTableComponent implements OnInit {

    @Input() tableData : Array<any>;
    @Input() search : any;
    @Input() optionsSelect : Array<any>
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
