import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPersonComponent } from './new-person/new-person.component';
import { PeopleComponent } from './people/people.component';
import { Routes, RouterModule } from '@angular/router';
import { ModalModule } from '../shared/components/modal/modal.module';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent,
  },
  {
    path: 'new',
    component: NewPersonComponent,
    outlet: 'modal',
  },
];

@NgModule({
  declarations: [
    NewPersonComponent,
    PeopleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule,
  ],
})
export class PeopleModule { }
