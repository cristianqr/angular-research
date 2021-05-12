import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'feature-a',
    loadChildren: () => import('./feature-a/feature-a.module').then(module => module.FeatureAModule),
  },
  {
    path: 'feature-b',
    loadChildren: () => import('./feature-b/feature-b.module').then(module => module.FeatureBModule),
  },
  {
    path: 'feature-c',
    loadChildren: () => import('./feature-c/feature-c.module').then(module => module.FeatureCModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
