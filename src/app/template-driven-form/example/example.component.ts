import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';
import { CountryRepository } from '../../shared-feature/repositories/country.repository';
import { Framework } from '../models/framework.model';

@Component({
  selector: 'cqr-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  person: Partial<Person>;
  countries: any[] = [];
  frameworks: Framework[];
  constructor(private countryRepository: CountryRepository) {
    this.person = {
      country: '',
    };

    this.frameworks = [
      {name: 'Angular', checked: false },
      {name: 'Vue', checked: false },
      {name: 'React', checked: false },
    ];
   }

  ngOnInit(): void {
    this.countryRepository.list().subscribe(countries => {
      this.countries = countries;
    })
  }

  savePerson() {
    this.person.favorityFrameworks = this.selectedFrameworks;
    console.log(this.person);
  }

  get selectedFrameworks(): string[] {
    return this.frameworks.filter(item => item.checked).map(item => item.name);
  }

}
