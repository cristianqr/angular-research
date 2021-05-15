import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusComponent } from './focus/focus.component';
import { ContainerComponent } from './container/container.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
  },
];

@NgModule({
  declarations: [
    FocusComponent,
    ContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DomQueriesModule { }
