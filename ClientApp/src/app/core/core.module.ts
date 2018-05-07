import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MDBBootstrapModules } from 'ng-mdb-pro';
import { MDBSpinningPreloader } from 'ng-mdb-pro';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [NavMenuComponent, DefaultLayoutComponent],
  exports: [
    NavMenuComponent,
    BrowserModule,
  ],
  imports: [
    CommonModule,
    MDBBootstrapModules.forRoot(),
    RouterModule,
    BrowserModule,
  ],
  providers: [MDBSpinningPreloader, Title, AuthService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CoreModule { }
