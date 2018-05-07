import { Component, OnInit, Input, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { CustomInput } from './../base-classes/custom-input';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePickerComponent),
  multi: true
};

@Component({
  selector: 'flight-cmd-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  encapsulation: ViewEncapsulation.None
})
export class DatePickerComponent extends CustomInput implements OnInit {

  // @todo: create models for inputs
  @Input()
  public placeholder: string;
  @Input()
  public name: string;
  @Input()
  public options: object;
  public optionsString: string;

  private defaultOptions: object = {
    dateFormat: 'mm/dd/yyyy',
    markCurrentDay: true,
    minYear: 1900,
    maxYear: 2100,
    width: 'auto'
  };

  constructor() {
    super();
  }

  ngOnInit() {
    this.options = { ...this.defaultOptions, ...this.options };
  }


}
