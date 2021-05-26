import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { ContentComponent, HeaderComponent, FooterComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DefaultComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DefaultComponent],
})
export class LayoutsModule { }
