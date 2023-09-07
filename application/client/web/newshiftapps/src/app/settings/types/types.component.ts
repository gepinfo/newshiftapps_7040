import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

interface DataItem {
  type: string;
  description: string;
  priority: string;
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
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})

export class TypesComponent implements OnInit {

  listOfOption: Array<{ label: string; value: string }> = [];
  size: NzSelectSizeType = 'default';
  singleValue = 'a10';
  multipleValue = ['a10', 'c12'];
  tagValue = ['a10', 'c12', 'tag'];

  ngOnInit(): void {
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }

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
      name: 'Type',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.type.localeCompare(b.type),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: false,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Description',
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.type.localeCompare(b.type),
      sortDirections: ['descend', null],
      filterMultiple: false,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Priority',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.type.localeCompare(b.type),
      filterMultiple: false,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.type.indexOf(address) !== -1
    }
  ];

  listOfData: DataItem[] = [
    {
      type: 'Type 1',
      description: 'type description',
      priority: 'priority 1',
    },
    {
      type: 'Type 1',
      description: 'type description',
      priority: 'priority 1',
    },
    {
      type: 'Type 1',
      description: 'type description',
      priority: 'priority 1',
    },
    {
      type: 'Type 1',
      description: 'type description',
      priority: 'priority 1',
    }
  ];
  type?: String = '';
  description?: String = '';
  isVisible = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
