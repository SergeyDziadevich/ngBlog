import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    HttpClientModule
  ],
  exports: [
    HttpClientModule,
    QuillModule
  ]
})
export class SharedModule { }
