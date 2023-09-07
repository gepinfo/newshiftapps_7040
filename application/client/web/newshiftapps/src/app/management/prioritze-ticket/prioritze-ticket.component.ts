import { Component } from '@angular/core';

interface DataItem {
  ticket: string;
  serviceQueue: string;
  priority: string;
  waitingTime: string;
  action: string;
}

@Component({
  selector: 'app-prioritze-ticket',
  templateUrl: './prioritze-ticket.component.html',
  styleUrls: ['./prioritze-ticket.component.css']
})
export class PrioritzeTicketComponent {
  selectedType = 'Clinical Setting 1'
  data = ['Clinical Setting 1', 'Clinical Setting 2', 'Clinical Setting 3'];

  listOfColumn = [
    {
      title: 'Ticket',
      compare: (a: DataItem, b: DataItem) => a.ticket.localeCompare(b.ticket),
      priority: false
    },
    {
      title: 'Service Queue',
      compare: (a: DataItem, b: DataItem) => a.ticket.localeCompare(b.ticket),
      priority: 3
    },
    {
      title: 'Priority',
      compare: (a: DataItem, b: DataItem) => a.ticket.localeCompare(b.ticket),
      priority: 2
    },
    {
      title: 'Waiting Time',
      compare: (a: DataItem, b: DataItem) => a.ticket.localeCompare(b.ticket),
      priority: 1
    },
    {
      title: 'Action',
      compare: (a: DataItem, b: DataItem) => a.ticket.localeCompare(b.ticket),
      priority: 1
    }
  ];
  listOfData: DataItem[] = [
    {
      ticket: 'XPTO123',
      serviceQueue: 'Lab Tests > Scheduled > Scheduled',
      priority: 'Elderly',
      waitingTime: '25 Mins',
      action: '',
    },
    {
      ticket: 'XPTO124',
      serviceQueue: 'Lab Tests > Scheduled > Service',
      priority: 'Conventional',
      waitingTime: '20 Mins',
      action: '',
    }
  ];
}
