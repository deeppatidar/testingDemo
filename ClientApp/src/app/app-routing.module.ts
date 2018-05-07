import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './core/default-layout/default-layout.component';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home.component';
import { TripsComponent } from './trips/trips.component';
import { AuthGuard } from './core/services/auth-guard.service';

import { AdminLayoutComponent } from './components/container/admin/admin-layout.component';
import { AppLayoutComponent } from './components/container/app/app-layout.component';

import { PaymentsInfoComponent } from './components/featured/admin/payments-info.component';
import { PaymentInfoComponent } from './components/featured/broker/payment-info.component';
import { BrokerComponent } from './components/featured/broker/broker.component';

import { OperatorComponent } from './components/featured/operator/operator.component';
import { BankActivityComponent } from './components/featured/operator/bank-activity.component';


const routes: Routes = [
  // Pages using the flight command layout
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: "full", canActivate: [AuthGuard] },
      { path: 'trips', component: TripsComponent, canActivate: [AuthGuard] },

    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: PaymentsInfoComponent, pathMatch: "full", canActivate: [AuthGuard] },
      { path: 'confirmed-trip', component: PaymentsInfoComponent, canActivate: [AuthGuard] },
      { path: 'completed-trip', component: PaymentsInfoComponent, canActivate: [AuthGuard] },
      { path: 'cancelled-trip', component: PaymentsInfoComponent, canActivate: [AuthGuard] },
      { path: 'general-ledger', component: PaymentsInfoComponent, canActivate: [AuthGuard] },
      {path: '**', redirectTo: 'confirmed-trip'},
    ]
  },
  {
    path: 'app',
    component: AppLayoutComponent,
    children: [
      { path: 'broker', component: BrokerComponent,
       children : [
         { path: '', component: PaymentInfoComponent, pathMatch: "full", canActivate: [AuthGuard] },
         { path: 'bank-activity', component: PaymentInfoComponent, canActivate: [AuthGuard] },
       ]
      },
      { path: 'operator', component: OperatorComponent,
       children : [
         { path: '', component: BankActivityComponent, pathMatch: "full", canActivate: [AuthGuard] },
         { path: 'bank-activity', component: BankActivityComponent, canActivate: [AuthGuard] },
       ]
      },
    ]
  },

//  { path: 'broker/bank-activity', component: PaymentInfoComponent, canActivate: [AuthGuard] },
//  {path: '**', redirectTo: 'broker/bank-activity'},
  // Pages not using layout
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'admin'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
