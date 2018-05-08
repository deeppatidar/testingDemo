import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
//import { AuthenticationInterceptor } from "./httpinterceptor"
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppServices {

  constructor(private http : HttpClient) { }

  public getTableData(): Observable<any> {
        const url = '../../../assets/sample-data/sample-data/tabledata.json';
        return this.http.get(url);
    };

  public getTransactionData(): Observable<any> {
    const url = '../../../assets/sample-data/sample-data/transactiontabledata.json';
    return this.http.get(url);
  };

  public getConfirmedTransactionData(): Observable<any> {
    const url = '../../../assets/sample-data/confirmedtabledata.json';
    return this.http.get(url);
  };

  public getCompletedTransactionData(): Observable<any> {
    const url = '../../../assets/sample-data/completedtabledata.json';
    return this.http.get(url);
  };

  public getCancelledTransactionData(): Observable<any> {
    const url = '../../../assets/sample-data/cancelledtabledata.json';
    return this.http.get(url);
  };

  public getGeneralLedgerTransactionData(): Observable<any> {
    const url = '../../../assets/sample-data/generalledgertabledata.json';
    return this.http.get(url);
  };

  public getBrokerBankActivityData(): Observable<any> {
    const url = '../../../assets/sample-data/brokerbankactivity.json';
    return this.http.get(url);
  };

  public getOperatorBankActivityData(): Observable<any> {
    const url = '../../../assets/sample-data/operatorbankactivity.json';
    return this.http.get(url);
  };

  public getTripCount(): Observable<any> {
    const url = '../../../assets/sample-data/tripcount.json';
    return this.http.get(url);
  }
}
