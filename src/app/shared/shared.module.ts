import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredDirective } from './directives';

@NgModule({
  declarations: [
    RequiredDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RequiredDirective,
  ]
})
export class SharedModule { }
