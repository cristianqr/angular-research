import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredDirective } from './directives';
import { AttachFileDirective } from './directives/attach-file.directive';

@NgModule({
  declarations: [
    RequiredDirective,
    AttachFileDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RequiredDirective,
    AttachFileDirective,
  ]
})
export class SharedModule { }
