import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class CountryRepository {
  constructor(private http: HttpClient) {}
  list(): Observable<any> {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
}
