import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
  global: any[];
  country: any[];
  loading = true;

  constructor( private globalCountryService: CovidService ) { }

  async ngOnInit(): Promise<void> {
    this.global = await this.globalCountryService.getGlobal();
    this.country = await this.globalCountryService.getSpain();
    this.loading = false;
  }

}
