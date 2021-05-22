import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LoginRoutingModule } from './login-routing.modules';
// import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

import { ThemeModule } from '../@theme/theme.module';
import { NbSpinnerModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { TestComponent } from './modals/test/test.component';
import { ToasterModule } from 'angular2-toaster';
import { ViewScammerRoutingModule } from './viewscammer-routing.module';
import { ViewscammerComponent } from './viewscammer.component';
import { SharedModule } from '../shared/shared.module';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
  NbCardModule,
  NbBadgeModule,
  NbTabsetModule,
  NbTooltipModule,
  NbWindowModule,
  NbCheckboxModule,
  NbDialogModule,
  NbInputModule,
  NbPopoverModule,
  NbCalendarModule,
  NbTreeGridModule,
  NbDatepickerModule,
  NbAccordionModule,
} from '@nebular/theme';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { BsDropdownModule } from 'ngx-bootstrap';

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
  NbCardModule,
  NbBadgeModule,
  NbTabsetModule,
  NbTooltipModule,
  NbWindowModule,
  NbCheckboxModule,
  NbDialogModule,
  NbInputModule,
  NbPopoverModule,
  NbCalendarModule,
  NbTreeGridModule,
  NbAccordionModule,
];

@NgModule({
  imports: [

    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    ThemeModule,
    NbMenuModule.forRoot(),
    NbActionsModule,
    NbDatepickerModule,
    BsDropdownModule.forRoot(),
    SharedModule,
    NbAccordionModule,
    ...NB_MODULES,
    RouterModule,

    CommonModule,
    ThemeModule,
    // LoginRoutingModule,
    ViewScammerRoutingModule,
    NbSpinnerModule,
    NbCardModule,
    NbLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    ToasterModule.forChild()

  ],
  declarations: [ViewscammerComponent],
  entryComponents: [

  ]
})
export class ViewscammerModule { }



// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class ViewscammerModule { }

