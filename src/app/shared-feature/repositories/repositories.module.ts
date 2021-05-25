import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CountryRepository } from './country.repository';
@NgModule({
  imports: [HttpClientModule],
  providers: [CountryRepository],
})
export class RepositoriesModule {}
