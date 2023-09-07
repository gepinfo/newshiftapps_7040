import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritzeTicketComponent } from './prioritze-ticket.component';

describe('PrioritzeTicketComponent', () => {
  let component: PrioritzeTicketComponent;
  let fixture: ComponentFixture<PrioritzeTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrioritzeTicketComponent]
    });
    fixture = TestBed.createComponent(PrioritzeTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
