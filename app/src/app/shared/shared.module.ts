import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { dataFilterPipe, NumberWithCommas, IsRead, SumPipe, AssetsPipe, unReverseDate, ReverseDate, StripTags, RoundOff, ChatMessagePipe, FileNameOnly } from '../@core/pipes/dataFilter';
import { TruncatePipe, TruncateTextPipe } from '../@core/pipes/truncate';
import { DataTableModule } from 'angular2-datatable';
import { NbStepperModule, NbSpinnerModule, NbListModule, } from '@nebular/theme';
// import { MomentModule } from 'angular2-moment';
//
// from valor components
import { TooltipModule, BsDatepickerModule, TimepickerModule, BsDropdownModule } from 'ngx-bootstrap';

// import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { NbMenuModule, NbActionsModule, NbTreeGridModule } from '@nebular/theme';
import { TimeagoModule } from 'ngx-timeago';

import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDialogModule,
  NbInputModule,
  NbPopoverModule,
  NbSelectModule,
  NbTabsetModule,
  NbTooltipModule,
  NbWindowModule,
} from '@nebular/theme';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { SearchComponent } from './search/search.component';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatButtonModule,
  MatButtonToggleModule,
];

const MODULES = [
  NbDialogModule.forChild(),
  NbWindowModule.forChild(),
  NbCardModule,
  NbCheckboxModule,
  NbTabsetModule,
  NbPopoverModule,
  NbButtonModule,
  NbInputModule,
  NbSelectModule,
  NbTooltipModule,
];

@NgModule({
  imports: [
    DataTableModule,
    NbStepperModule,
    NbSpinnerModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NbMenuModule.forRoot(),
    NbTreeGridModule,
    BsDropdownModule,
    ...MODULES,
    ...materialModules,
  ],
  declarations: [
    dataFilterPipe,
    NumberWithCommas,
    IsRead,
    TruncateTextPipe,
    TruncatePipe,
    SumPipe,
    AssetsPipe,
    ReverseDate,
    unReverseDate,
    StripTags,
    RoundOff,
    ChatMessagePipe,
    FileNameOnly,
    ConfirmationModalComponent,
    SearchComponent
  ],
  entryComponents: [
    ConfirmationModalComponent,
    SearchComponent,
  ],
  exports: [
    dataFilterPipe,
    NumberWithCommas,
    IsRead,
    SumPipe,
    AssetsPipe,
    ReverseDate,
    unReverseDate,
    ChatMessagePipe,
    FileNameOnly,
    TruncateTextPipe,
    TruncatePipe,
    StripTags,
    RoundOff,
    NbStepperModule,
    NbSpinnerModule,
    BsDatepickerModule,
    TimepickerModule,
    NbListModule,
    TooltipModule,
    CommonModule,
    TimeagoModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmationModalComponent,
    SearchComponent,
    ...materialModules
  ],
  providers: [
    ReverseDate,
    unReverseDate,
  ]
})
export class SharedModule { }
