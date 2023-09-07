import { Component } from '@angular/core';
import { getISOWeek } from 'date-fns';

@Component({
  selector: 'app-comparative',
  templateUrl: './comparative.component.html',
  styleUrls: ['./comparative.component.css']
})
export class ComparativeComponent {
  selectedType = 'Clinical Setting 1'
  data = ['Clinical Setting 1', 'Clinical Setting 2', 'Clinical Setting 3'];
  selectedAction = '15 Minutes'
  actions = ['15 Minutes', '30 Minutes', '45 Minutes'];
  date = null;
  checkOptionsOne = [
    { label: 'Cencelamentos', value: 'Cencelamentos', checked: false },
    { label: 'Desistencias', value: 'Desistencias' },
  ];
  selectedComparativeType = '';
  comparativeTypes = ['Between clinical Settings', 'Between a Clinical Setting and General', 'Benchmark'];
  showClinicalSettingA: Boolean = false;
  showClinicalSettingB: Boolean = false;

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

  onChangeComparativeType(value: any) {
    console.log(value)
    this.showClinicalSettingA = (value === 'Between clinical Settings' || value === 'Between a Clinical Setting and General' || value === 'Benchmark') ? true : false;
    this.showClinicalSettingB = value === 'Between clinical Settings' ? true : false;
  }
}
