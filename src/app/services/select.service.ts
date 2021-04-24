import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';
import { State } from '../models/state.model';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor() {}

  getCountries() {
    return [
      new Country(1,'Bangladesh'),
      new Country(2, 'Pakistan')
    ];
  }

  getStates() {
    return [
      new State(1, 1, 'Dhaka'),
      new State(2, 1, 'Rajshahi'),
      new State(3, 2, 'Korachi'),
      new State(4, 2, 'Beluchistan')
    ];
  }
}
