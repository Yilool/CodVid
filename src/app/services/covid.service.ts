import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor( private http: HttpClient) { }

  async getAllCountries(): Promise<any> {
    const endPoint = 'https://api.covid19api.com/summary'
  
    let response: any = await this.http.get(endPoint).toPromise()

    return response.Countries;
  }

  async getGlobal(): Promise<any> {
    const endPoint = 'https://api.covid19api.com/summary'

    let response: any = await this.http.get(endPoint).toPromise();

    return response.Global;
  }

  async getSpain(): Promise<any> {
    const endPoint = 'https://api.covid19api.com/summary'
  
    let response: any = await this.http.get(endPoint).toPromise();

    return response.Countries.filter( country => {return country.Country === 'Spain'});
  }
}
