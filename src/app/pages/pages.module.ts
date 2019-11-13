import { NgModule } from '@angular/core';
import { NbContextMenuModule, NbTabsetModule, NbMenuModule, NbCardModule, NbSelectModule, NbButtonModule, NbIconModule, NbInputModule, NbCheckboxModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { DaySheetComponent } from './day-sheet/day-sheet.component';
import { UnmatchedErasComponent } from './unmatched-eras/unmatched-eras.component';
import { AccountsReceivableComponent } from './accounts-receivable/accounts-receivable.component';
import { PatientStatementsComponent } from './patient-statements/patient-statements.component';
import { FeeScheduleComponent } from './fee-schedule/fee-schedule.component';
import { LiveclaimsComponent } from './liveclaims/liveclaims.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbCardModule,
    NbSelectModule,
    NbButtonModule,
    NbIconModule,
    NbCheckboxModule,
    NbInputModule,
    NbTreeGridModule,
    Ng2SmartTableModule,
    NbTabsetModule,
    NbContextMenuModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
  ],
  declarations: [
    PagesComponent,
    DaySheetComponent,
    UnmatchedErasComponent,
    AccountsReceivableComponent,
    PatientStatementsComponent,
    FeeScheduleComponent,
    LiveclaimsComponent,
  ],
})
export class PagesModule {
}
