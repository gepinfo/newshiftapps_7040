import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator-reports',
  templateUrl: './indicator-reports.component.html',
  styleUrls: ['./indicator-reports.component.css']
})
export class IndicatorReportsComponent implements OnInit {
  selectedType = '';
  data = ['Real Time', 'Logs', 'Comparative', 'Foot Traffic', 'Average Time'];

  ngOnInit(): void {
    this.onChange(this.data[0])
  }

  onChange(value: string): void {
    this.selectedType = value;
  }
}
