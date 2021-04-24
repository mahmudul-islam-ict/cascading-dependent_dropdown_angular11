import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Country } from './models/country.model';
import { State } from './models/state.model';
import { SelectService } from './services/select.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  selectedCountry: Country = new Country(0, '');
  countries!: Country[];
  states!: State[];

  constructor(private service: SelectService){}

  ngOnInit(){
    this.countries = this.service.getCountries();
    this.onSelect(this.selectedCountry.id);
  }
  onSelect(country_id: any){
    this.states = this.service.getStates().filter((item)=> item.country_id == (country_id)!.value);
    console.log(this.states);
  }

}
