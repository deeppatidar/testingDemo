import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankActivityComponent } from './bank-activity.component';

describe('BankActivityComponent', () => {
  let component: BankActivityComponent;
  let fixture: ComponentFixture<BankActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
