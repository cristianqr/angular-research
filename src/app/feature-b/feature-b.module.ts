import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureBRoutingModule } from './feature-b-routing.module';
import { FeatureBComponent } from './feature-b/feature-b.component';
import { NetworkingModule } from '../shared/networking/networking.module';


@NgModule({
  declarations: [
    FeatureBComponent
  ],
  imports: [
    CommonModule,
    FeatureBRoutingModule,
    NetworkingModule.forFeature({
      baseUrl: 'https://feature-b.com',
    }),
  ]
})
export class FeatureBModule { }
