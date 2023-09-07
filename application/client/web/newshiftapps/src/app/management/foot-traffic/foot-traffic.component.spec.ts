import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootTrafficComponent } from './foot-traffic.component';

describe('FootTrafficComponent', () => {
  let component: FootTrafficComponent;
  let fixture: ComponentFixture<FootTrafficComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootTrafficComponent]
    });
    fixture = TestBed.createComponent(FootTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
