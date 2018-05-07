import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerTableComponent } from './broker-table.component';

describe('BrokerTableComponent', () => {
  let component: BrokerTableComponent;
  let fixture: ComponentFixture<BrokerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
