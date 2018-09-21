import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ApiWeatherService {



  apiKey = '340f115ec3e873df5e3bf519539c951b';
  url ;

  constructor(private http: Http) {
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=';


  }

  getWeather(city, code) {
    return this.http.get(this.url + city + ',' + code + '&APPID=' + this.apiKey).pipe(map((response: any) => response.json()));

  }
}
