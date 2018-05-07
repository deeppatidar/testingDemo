import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class TripService {

  constructor(private _http: HttpClient) { }

  private testUrl = environment.apiEndpoint + 'ping/authorized';

  // Dry this function
  private errorHandler(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }

  // Test for Interceptor
  pingAuthorized(): Observable<any> {
    return this._http.get<any>(this.testUrl)
      .do(data => console.log('Respone: ' + JSON.stringify(data)))
      .catch(this.errorHandler);
  }


}
