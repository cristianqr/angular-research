import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';
import { ContainerComponent } from './container/container.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
  },
];

@NgModule({
  declarations: [
    ContainerComponent,
    NgClassExampleComponent,
    NgStyleExampleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class DirectivesModule { }
