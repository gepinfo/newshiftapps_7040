import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from './products.service';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { NzSelectSizeType } from 'ng-zorro-antd/select';

    export enum dataPriority {
        HIGH = 'high',
        LOW = 'low',
        MEDIUM = 'medium',
    }

interface DataItem {
  name: String;
  modules: String;
  dataPriority: dataPriority;
  accessProfile: String;
  status: String;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})

export class ProductsComponent implements OnInit {
public searchtickets:any;
public modulesitemArray:any[] = [];
    public products:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        modules: '',
        dataPriority: '',
    }

    isVisibleCreate = false;
    isVisibleUpdate = false;
    size: NzSelectSizeType = 'default';




    constructor (
        private nzMessageService: NzMessageService,
        private productsService: ProductsService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
        this.modulesGetAllValues();
        this.products.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }

   showModal(): void {
    this.isVisibleCreate = true;
   }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisibleCreate = false;
    this.isVisibleUpdate = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisibleCreate = false;
    this.isVisibleUpdate = false;
  }




     GpCreate() {
      this.isVisibleCreate = false;
        this.productsService.PostAllproductsValues(this.products).subscribe((data:any) => {
            this.products.name = '',
            this.products.modules = '',
            this.products.dataPriority = '',
            this.GpGetAllValues();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }

    filterStatus = [
      { text: 'Active', value: 'ACTIVE' },
      { text: 'In-Active', value: 'INACTIVE' }
    ];
  
    filterAccessProfile = [
      { text: 'Receptionist', value: 'Receptionist' },
      { text: 'Health Care Provide', value: 'Health Care Provide' }
    ]
  
    
  
    listOfData: DataItem[] = [];

    GpUpdate() {
      this.productsService.Updateproducts(this.products).subscribe((data:any) => {
          this.products.name = '';
          this.products.modules = '';
          this.products.dataPriority = '';
          this.GpGetAllValues();
          this.isVisibleUpdate = false;
      },
      (error:Error) => {
          console.log('Error', error);
      });
  }
  GpDelete(deleteid:any) {
      this.productsService.DeleteproductsValues(deleteid).subscribe((data:any) => {
          this.GpGetAllValues();
      },
      (error:Error) => {
          console.log('Error', error);
      });
  }

  GpGetAllValues() {
    this.productsService.GetAllproductsValues().subscribe((data: any) => {
        this.listOfData = data;
        console.log(data);
    },
    (error: Error) => {
        console.log('Error', error);
    });
  }
  modulesGetAllValues() {
    this.productsService.GetAllmodulesValues().subscribe((data: any) => {
        this.modulesitemArray = data;
        console.log(data);
    },
    (error: Error) => {
        console.log('Error', error);
    });
  }

  
  search(search:any){
    if(search.length >= 2){
      const targetValue: any[] = [];
      this.listOfData.forEach((value: any) => {
        let keys = Object.keys(value);
        for (let i = 0; i < keys.length; i++) {
          if (value[keys[i]] && value[keys[i]].toString().toLocaleLowerCase().includes(search)) {
            targetValue.push(value);
            break;
          }
        }
      });
      this.listOfData = targetValue;
    } else {
      this.GpGetAllValues();
    }
  }


  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirmDelete(data:any): void {
    this.nzMessageService.info('click confirm');
    this.GpDelete(data.id);
  }

  getUpdateById(data:any){
    this.isVisibleUpdate = true;
    this.products = data;

  }
}

  