import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { MDBBootstrapModules } from 'ng-mdb-pro';
import { MDBSpinningPreloader } from 'ng-mdb-pro';
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModules.forRoot(),
    FormsModule
  ],
  exports: [
    MDBBootstrapModules,
    CommonModule,
    FormsModule,
    DatePickerComponent
  ],
  declarations: [DatePickerComponent],
  providers: [MDBSpinningPreloader],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
