import { Component, OnInit, Input} from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input()
  url: string = "https://www.hghghhghghghgh.com";
  urlSafe: SafeResourceUrl;


  location = {
    city: 'france',
    code: 'fr'
  };
  weather: any;
  value;
  Math: any;

  myTemplate: any = '';
  constructor(private apiweatherService: ApiServiceService, public sanitizer: DomSanitizer) {
    this.Math = Math;
  }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.value = localStorage.getItem('location');

    if (this.value != null) {
        this.location = JSON.parse(this.value);


  }
    this.apiweatherService.getWeather(this.location.city, this.location.code).subscribe(
      response => {
        console.log(response);
        this.weather = response;
      }
    );
  }


}
