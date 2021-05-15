import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectivesComponent } from './custom-directives.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CustomDirectivesComponent,
  },
];

@NgModule({
  declarations: [
    CustomDirectivesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class CustomDirectivesModule { }
