import { Component } from '@angular/core';
import { getISOWeek } from 'date-fns';

@Component({
  selector: 'app-foot-traffic',
  templateUrl: './foot-traffic.component.html',
  styleUrls: ['./foot-traffic.component.css']
})
export class FootTrafficComponent {
  selectedType = 'Clinical Setting 1'
  data = ['Clinical Setting 1', 'Clinical Setting 2', 'Clinical Setting 3'];
  selectedAction = '15 Minutes'
  actions = ['15 Minutes', '30 Minutes', '45 Minutes'];

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
