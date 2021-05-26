import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryRepository } from '../../shared-feature/repositories/country.repository';

@Component({
  selector: 'cqr-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  personForm!: FormGroup;
  countries: any[] = [];

  constructor(private countryRepository: CountryRepository, private fb: FormBuilder){
  }

  ngOnInit(): void {
    this.createFormFB();
    this.countryRepository.list().subscribe(countries => {
      this.countries = countries;
    });
  }

  private createForm(): void  {
    this.personForm = new FormGroup({
      'firstName': new FormControl(),
      'lastName': new FormControl(),
      'email': new FormControl(),
      'gender': new FormControl(),
      'address': new FormGroup({
        'country': new FormControl(),
        'street': new FormControl(),
        'zip': new FormControl(),
      }),
    });
  }

  private createFormFB(): void  {
    this.personForm = this.fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [Validators.required, this.emailValidator]],
      'gender': [''],
      'address': this.fb.group({
        'country': [''],
        'street': [''],
        'zip': [''],
      }),
    });
    this.personForm.get('firstName')?.invalid
  }

  register() {
    console.log('register');

    console.log(this.personForm.value);
  }

  invalidControl(controlName: string) {
    return this.personForm.get(controlName)?.touched && this.personForm.get(controlName)?.invalid;
  }

  emailValidator(control: AbstractControl){
    const regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if(control.value && !control.value.match(regEx)){
      return {
        invalidEmail: true,
      };
    }
    return null;
  }

  reset(event: Event) {
    // event.preventDefault();
    console.log('testing');
    this.personForm.reset();
  }
}
