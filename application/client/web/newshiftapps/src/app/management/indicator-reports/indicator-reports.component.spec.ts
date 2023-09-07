import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorReportsComponent } from './indicator-reports.component';

describe('IndicatorReportsComponent', () => {
  let component: IndicatorReportsComponent;
  let fixture: ComponentFixture<IndicatorReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndicatorReportsComponent]
    });
    fixture = TestBed.createComponent(IndicatorReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
