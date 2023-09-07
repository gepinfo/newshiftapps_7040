import { Component } from '@angular/core';
import { getISOWeek } from 'date-fns';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent {
  selectedType = 'Clinical Setting 1'
  data = ['Clinical Setting 1', 'Clinical Setting 2', 'Clinical Setting 3'];
  selectedAction = 'Action 1'
  actions = ['Action 1', 'Action 2', 'Action 3'];

  date = null;

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date[]): void {
    console.log('week: ', result.map(getISOWeek));
  }

  time: Date | null = null;

  log(value: Date): void {
    console.log(value);
  }
}
