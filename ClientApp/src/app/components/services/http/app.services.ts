import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
//import { AuthenticationInterceptor } from "./httpinterceptor"
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppServices {

  constructor(private http : HttpClient) { }

  public getTableData(): Observable<any> {
        const url = '../../../assets/tabledata.json';
        return this.http.get(url);
    };

  public getTransactionData(): Observable<any> {
    const url = '../../../assets/transactiontabledata.json';
    return this.http.get(url);
  };

  public getBrokerBankActivityData(): Observable<any> {
    const url = '../../../assets/brokerBankActivity.json';
    return this.http.get(url);
  };

  public getOperatorBankActivityData(): Observable<any> {
    const url = '../../../assets/brokerBankActivity.json';
    return this.http.get(url);
  }
}
