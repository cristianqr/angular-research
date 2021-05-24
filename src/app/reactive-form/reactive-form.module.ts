import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example/example.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: ExampleComponent,
  },
];

@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class ReactiveFormModule { }
