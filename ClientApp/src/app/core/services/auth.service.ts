import { Injectable, Inject, Injector } from '@angular/core';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthResponse } from './../models/auth-response';
import { ToastrService } from 'ngx-toastr';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../../../environments/environment';

//import { environment } fro

@Injectable()
export class AuthService {
  public token: string = '';
  public refresh_token: string = '';
  readonly CLIENT_ID: string = 'OperatorApp';

  private loggedInUser = '';
  private suffix = '';
  private isRouting = false;

  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService,
    private injector: Injector) {
    //this.storeToken();
  }

  private getApiUrl(): string {
    return environment.apiEndpoint;
  }

  isLoggedIn(): boolean {
    const token: string = this.jwtHelperService.tokenGetter();
    //const token: string = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser'))

    if (!token) {
      return false;
    }

    const tokenExpired: boolean = this.jwtHelperService.isTokenExpired(token);

    if (tokenExpired && !this.isRouting) {
      const router = this.injector.get<Router>(Router);
      if (!router.isActive('trips', true)) {
        this.isRouting = true;

        const navEnd = router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
            this.isRouting = false;
            navEnd.unsubscribe();
          }
        });

        console.log('Access token expired.  Sending to unauthorized page.');

        router.navigate(['/login']);
      }
    }

    return !tokenExpired;
  }

  updateToken(): void {
    const parsedToken = JSON.parse(localStorage.getItem('currentUser'));
    const username = parsedToken.username;

    localStorage.setItem('currentUser', JSON.stringify({ username, token: this.token, refresh_token: this.refresh_token }));
  }

  refreshToken(): Observable<boolean> {
    if (!this.refresh_token || !this.loggedInUser) {
      return Observable.of(false);
    }

    const body = {
      refresh_token: this.refresh_token,
      grant_type: 'refresh_token',
      client_id: this.CLIENT_ID,
      client_secret: ''
    };

    //console.log('Login object: ' + JSON.stringify(object));
    return this.http.post(`${this.getApiUrl()}accounts/Token${(this.suffix ? `/${this.suffix}` : '')}`, body, { observe: 'response' })
      //.map(res => res.json());
      .map((response: HttpResponse<AuthResponse>) => {
        // login successful if there's a jwt token in the response
        const token = response && response.body.access_token;
        if (token) {
          const username = this.loggedInUser;
          console.log('Received token');
          // set token property
          this.token = token;
          this.refresh_token = response.body.refresh_token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username, token, refresh_token: this.refresh_token }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          console.log('Did NOT receive token');

          return false;
        }
      });
  }

  login(username: string, password: string, suffix?: string): Observable<boolean> {
    this.suffix = suffix;
    const body = {
      username,
      password,
      grant_type: 'password',
      client_id: this.CLIENT_ID,
      client_secret: ''
    };

    //console.log('Login object: ' + JSON.stringify(object));
    return this.http.post(`${this.getApiUrl()}Accounts/Token${(suffix ? `/${suffix}` : ``)}`, body)
      //.map(res => res.json());
      .map((response: any) => {
        // login successful if there's a jwt token in the response
        const token = response && response.data.access_token;
        if (token) {
          this.loggedInUser = username;
          console.log('Received token');
          // set token property
          this.token = token;
          this.refresh_token = response.data.refresh_token;

          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username, token, refresh_token: this.refresh_token }));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          console.log('Did NOT receive token');

          return false;
        }
      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = '';
    localStorage.removeItem('currentUser');
  }

}
