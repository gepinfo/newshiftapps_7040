import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

interface DataItem {
  name: string;
  userName: string;
  accessProfile: string;
  status: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {
  change(value: boolean): void {
    console.log(value);
  }

  filterStatus = [
    { text: 'Active', value: 'ACTIVE' },
    { text: 'In-Active', value: 'INACTIVE' }
  ];

  filterAccessProfile = [
    { text: 'Receptionist', value: 'Receptionist' },
    { text: 'Health Care Provide', value: 'Health Care Provide' }
  ]

  listOfColumns: ColumnItem[] = [
    {
      name: 'Full Name',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: false,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Username (Login)',
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.userName.localeCompare(b.userName),
      sortDirections: ['descend', null],
      filterMultiple: false,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Access Profile',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.accessProfile.localeCompare(b.accessProfile),
      filterMultiple: false,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.accessProfile.indexOf(address) !== -1
    },
    {
      name: 'Status',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.status.length - b.status.length,
      filterMultiple: false,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.status.indexOf(address) !== -1
    }
  ];

  listOfData: DataItem[] = [
    {
      name: 'John Brown',
      userName: 'John Brown',
      accessProfile: 'Receptionist',
      status: 'Active'
    },
    {
      name: 'Jim Green',
      userName: 'Jim Green',
      accessProfile: 'Receptionist',
      status: 'Active'
    },
    {
      name: 'John Red',
      userName: 'John Red',
      accessProfile: 'Health Care Provide',
      status: 'In-Active'
    },
    {
      name: 'John Brown',
      userName: 'John Brown',
      accessProfile: 'Receptionist',
      status: 'Active'
    },
    {
      name: 'John Red',
      userName: 'John Red',
      accessProfile: 'Health Care Provide',
      status: 'In-Active'
    },
  ];
}
