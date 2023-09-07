import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { UsersListComponent } from './users-list/users-list.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { TicketsComponent } from './tickets/tickets.component';
import { TypesComponent } from './types/types.component';
import { ModulesComponent } from '../modules/modules.component';
import { ProductsComponent } from '../products/products.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
@NgModule({
  declarations: [
    SettingsComponent,
    GeneralSettingsComponent,
    UsersListComponent,
    TicketsComponent,
    TypesComponent,
    ModulesComponent,
    ProductsComponent,

  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    NzMenuModule,
    NzLayoutModule,
    NzInputModule,
    NzTableModule,
    NzDropDownModule,
    NzSwitchModule,
    FormsModule,
    NzIconModule,
    NzButtonModule,
    NzSelectModule,
    NzModalModule,
    NzFormModule
  ]
})
export class SettingsModule { }
