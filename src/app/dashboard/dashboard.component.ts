import { Component, OnInit, Input} from '@angular/core';
import { ApiServiceService } from '../api-service.service';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  location = {
    city: 'france',
    code: 'fr'
  };
  weather: any;
  value;

  Math: any;
  dangerousVideoUrl;
  videoUrl;
  myTemplate: any = '';
  constructor(private router: Router, private apiweatherService: ApiServiceService,
   private cookieService: CookieService, private sanitizer: DomSanitizer) {
    this.Math = Math;

  }

  dec(): void {
    this.cookieService.delete('Test');
    this.router.navigate(['login']);

  }

  ngOnInit() {
    this.value = localStorage.getItem('location');
    const test: string = this.cookieService.get('Test');
    if (test === 'non') {
      this.router.navigate(['login']);
    }
    console.log(test);
    if (this.value != null) {
        this.location = JSON.parse(this.value);


  }
    this.apiweatherService.getWeather(this.location.city, this.location.code).subscribe(
      response => {
        console.log(response);
        this.weather = response;
        this.dangerousVideoUrl = 'https://cors.io/?https://www.windfinder.com/#7/' + this.weather.coord.lat + '/' + this.weather.coord.lon;
    this.videoUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);


      }
    );
  }


}
