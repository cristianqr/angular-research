import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredDirective } from './directives';
import { AttachFileDirective } from './directives/attach-file.directive';
import { MaxLengthPipe } from './pipes/max-length.pipe';

@NgModule({
  declarations: [
    RequiredDirective,
    AttachFileDirective,
    MaxLengthPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RequiredDirective,
    AttachFileDirective,
    MaxLengthPipe,
  ]
})
export class SharedModule { }
