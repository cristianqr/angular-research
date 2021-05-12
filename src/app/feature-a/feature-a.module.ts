import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { FeatureAComponent } from './feature-a/feature-a.component';
import { NetworkingModule } from '../shared/networking/networking.module';
import { StorageModule } from '../shared';


@NgModule({
  declarations: [
    FeatureAComponent,
  ],
  imports: [
    CommonModule,
    FeatureARoutingModule,
    NetworkingModule.forFeature({
      baseUrl: 'https://feature-a.com',
    }),
  ]
})
export class FeatureAModule { }
