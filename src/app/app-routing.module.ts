import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'content-projection',
    loadChildren: () => import('./content-projection/content-projection.module').then(m => m.ContentProjectionModule),
  },
  {
    path: 'dom-queries',
    loadChildren: () => import('./dom-queries/dom-queries.module').then(m => m.DomQueriesModule),
  },
  {
    path: 'custom-directives',
    loadChildren: () => import('./custom-directives/custom-directives.module').then(m => m.CustomDirectivesModule),
  },
  {
    path: 'custom-pipes',
    loadChildren: () => import('./custom-pipes/custom-pipes.module').then(m => m.CustomPipesModule),
  },
  {
    path: 'reactive-forms',
    loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule),
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule),
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
