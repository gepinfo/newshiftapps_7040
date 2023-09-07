import { Component } from '@angular/core';

interface DataItem {
  clinicalSetting: String,
  waiting: String,
  cbs: String,
  finished: String,
  dropouts: String,
  cancelled: String,
  longestWait: String,
  workingPosition: String,
  total: String
}

@Component({
  selector: 'app-real-time',
  templateUrl: './real-time.component.html',
  styleUrls: ['./real-time.component.css']
})

export class RealTimeComponent {
  listOfColumn = [
    {
      title: 'Clinical Setting',
      compare: (a: any, b: any) => a.clinicalSetting.localeCompare(b.clinicalSetting),
      priority: false
    },
    {
      title: 'Waiting',
      compare: (a: any, b: any) => a.clinicalSetting - b.clinicalSetting,
      priority: 3
    },
    {
      title: 'Currently being served',
      compare: (a: any, b: any) => a.clinicalSetting - b.clinicalSetting,
      priority: 2
    },
    {
      title: 'Finished',
      compare: (a: any, b: any) => a.clinicalSetting - b.clinicalSetting,
      priority: 1
    },
    {
      title: 'Dropouts',
      compare: (a: any, b: any) => a.clinicalSetting - b.clinicalSetting,
      priority: 1
    },
    {
      title: 'Cancelled',
      compare: (a: any, b: any) => a.clinicalSetting - b.clinicalSetting,
      priority: 1
    },
    {
      title: 'Longest Wait',
      compare: (a: any, b: any) => a.clinicalSetting - b.clinicalSetting,
      priority: 1
    },
    {
      title: 'Working Position',
      compare: (a: any, b: any) => a.clinicalSetting - b.clinicalSetting,
      priority: 1
    },
    {
      title: 'Total',
      compare: (a: any, b: any) => a.clinicalSetting - b.clinicalSetting,
      priority: 1
    }
  ];
  listOfData: DataItem[] = [
    {
      clinicalSetting: 'Clinical Setting A',
      waiting: '13',
      cbs: '3',
      finished: '5',
      dropouts: '2',
      cancelled: '1',
      longestWait: '35 mins',
      workingPosition: '4',
      total: '24'
    }
  ];
}
