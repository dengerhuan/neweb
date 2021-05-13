import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule} from '@angular/router';


import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule, RouterModule, CommonModule, ReactiveFormsModule, FormsModule
  ]
})
export class MustModule {
}
