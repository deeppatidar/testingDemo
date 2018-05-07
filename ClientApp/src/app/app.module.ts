//import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { SharedModule } from './_shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginModule } from './login/login.module';
import { TripsModule } from './trips/trips.module';
import { JwtModule } from '@auth0/angular-jwt';

import { AdminLayoutComponent } from './components/container/admin/admin-layout.component';
import { PaymentsInfoComponent } from './components/featured/admin/payments-info.component';

import { AppLayoutComponent } from './components/container/app/app-layout.component';
import { PaymentInfoComponent } from './components/featured/broker/payment-info.component';

import { AppServices } from './components/services/http/app.services';
import { FilterPipe } from './components/pipes/filter.pipe';

//shared-components
import { CardComponent } from './components/shared/card/card.component';
import { TableComponent } from './components/shared/table/table.component';
import { TransactionTableComponent } from './components/shared/transaction-table/transaction-table.component';
import { BrokerComponent } from './components/featured/broker/broker.component';
import { BrokerTableComponent } from './components/shared/broker/broker-table.component';
import { OperatorComponent } from './components/featured/operator/operator.component';
import { BankActivityComponent } from './components/featured/operator/bank-activity.component';
import { GeneralLedgerTableComponent } from './components/shared/general-ledger-table/general-ledger-table.component';

export function getJwtToken(): string {
  const parsedToken = JSON.parse(localStorage.getItem('currentUser'));
  let token = '';
  if (parsedToken) {
    token = parsedToken.token;
  }

  return token;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AdminLayoutComponent,
    PaymentsInfoComponent,
    CardComponent,
    TableComponent,
    TransactionTableComponent,
    FilterPipe,
    AppLayoutComponent,
    PaymentInfoComponent,
    BrokerComponent,
    BrokerTableComponent,
    OperatorComponent,
    BankActivityComponent,
    GeneralLedgerTableComponent
  ],
  imports: [
    // BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,

    CoreModule,
    SharedModule,
    AppRoutingModule,
    LoginModule,
    TripsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getJwtToken,
        whitelistedDomains: ['localhost:8084'],
        skipWhenExpired: true,
        // @TODO: Remove authScheme once bearer issues has been resolved in the api.
        authScheme: ''
      }
    })
  ],
  exports: [
    SharedModule
  ],
  providers: [AppServices],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
