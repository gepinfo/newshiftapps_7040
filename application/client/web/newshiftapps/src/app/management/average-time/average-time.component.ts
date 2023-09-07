import { Component } from '@angular/core';
import { getISOWeek } from 'date-fns';

@Component({
  selector: 'app-average-time',
  templateUrl: './average-time.component.html',
  styleUrls: ['./average-time.component.css']
})
export class AverageTimeComponent {
  selectedType = 'Clinical Setting 1'
  data = ['Clinical Setting 1', 'Clinical Setting 2', 'Clinical Setting 3'];
  selectedAction = '15 Minutes'
  actions = ['15 Minutes', '30 Minutes', '45 Minutes'];
  date = null;
  checkOptionsOne = [
    { label: 'Cencelamentos', value: 'Cencelamentos', checked: false },
    { label: 'Desistencias', value: 'Desistencias' },
  ];

  onCheck(value: object[]): void {
    console.log(value);
  }

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
