import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  countries: any[];
  loading = true;

  constructor( private allCountryServices: CovidService ) { }

  async ngOnInit(): Promise<void> {
    this.countries = await this.allCountryServices.getAllCountries();
    this.loading = false;
  }
}
