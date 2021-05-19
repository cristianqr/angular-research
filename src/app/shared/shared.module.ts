import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredDirective } from './directives';
import { MaxLengthPipe } from './pipes/max-length.pipe';

@NgModule({
  declarations: [
    RequiredDirective,
    MaxLengthPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RequiredDirective,
    MaxLengthPipe,
  ]
})
export class SharedModule { }
