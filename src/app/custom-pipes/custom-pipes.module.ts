import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { RouterModule, Routes } from '@angular/router';
import { MaxLengthExampleComponent } from './max-length-example/max-length-example.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
  },
];

@NgModule({
  declarations: [ContainerComponent, MaxLengthExampleComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class CustomPipesModule { }
