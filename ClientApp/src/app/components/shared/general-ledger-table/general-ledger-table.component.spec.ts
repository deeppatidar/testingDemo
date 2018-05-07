import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLedgerTableComponent } from './general-ledger-table.component';

describe('GeneralLedgerTableComponent', () => {
  let component: GeneralLedgerTableComponent;
  let fixture: ComponentFixture<GeneralLedgerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralLedgerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLedgerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
