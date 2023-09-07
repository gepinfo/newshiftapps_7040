import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { IndicatorReportsComponent } from './indicator-reports/indicator-reports.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { IconsProviderModule } from '../icons-provider.module';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RealTimeComponent } from './real-time/real-time.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LogsComponent } from './logs/logs.component';
import { FootTrafficComponent } from './foot-traffic/foot-traffic.component';
import { AverageTimeComponent } from './average-time/average-time.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { ComparativeComponent } from './comparative/comparative.component';
import { TicketHistoryComponent } from './ticket-history/ticket-history.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { PrioritzeTicketComponent } from './prioritze-ticket/prioritze-ticket.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [
    ManagementComponent,
    IndicatorReportsComponent,
    RealTimeComponent,
    LogsComponent,
    FootTrafficComponent,
    AverageTimeComponent,
    ComparativeComponent,
    TicketHistoryComponent,
    PrioritzeTicketComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    NzTabsModule,
    NzSelectModule,
    IconsProviderModule,
    FormsModule,
    NzCardModule,
    NzGridModule,
    NzTableModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzButtonModule,
    NzCheckboxModule,
    NzInputModule,
    NzStepsModule,
    NzTypographyModule
  ]
})
export class ManagementModule { }
