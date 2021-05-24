import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule} from '@angular/router';


import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule, FlexLayoutModule, RouterModule, CommonModule, ReactiveFormsModule, FormsModule
  ]
})
export class MustModule {
}
