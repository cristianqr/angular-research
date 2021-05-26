import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NetworkingModule, StorageModule } from './shared';
import { TodoComponent } from './todo/todo.component';
import { IndexComponent } from './index/index.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';
import { RepositoriesModule } from './shared-feature/repositories/repositories.module';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    NetworkingModule.forRoot({
      baseUrl: 'https://reqres.in',
    }),
    StorageModule,
    SharedModule,
    ReactiveFormModule,
    RepositoriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
