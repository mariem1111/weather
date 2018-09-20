import { Component, OnInit } from '@angular/core';
import {ApiWeatherService} from '../Api-weather.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  location = {
    city:  'london',
    code : 'uk'
  };
  weather: any;
  constructor(private apiweatherService: ApiWeatherService) { }

  ngOnInit() {

    this.apiweatherService.getWeather(this.location.city, this.location.code).subscribe(
      response => {
        console.log(response);
        this.weather = response;
      }
    );
  }


  }


