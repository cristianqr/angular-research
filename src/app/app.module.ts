import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NetworkingModule, StorageModule } from './shared';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { TodoComponent } from './todo/todo.component';
import { IndexComponent } from './index/index.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';
import { RepositoriesModule } from './shared-feature/repositories/repositories.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    TodoComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
