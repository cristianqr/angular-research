import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RequiredComponent } from './required/required.component';
import { ContainerComponent } from './container/container.component';
import { AttachFileComponent } from './attach-file/attach-file.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
  },
];

@NgModule({
  declarations: [
    ContainerComponent,
    RequiredComponent,
    AttachFileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class CustomDirectivesModule { }
