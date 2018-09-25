import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherProject';

  constructor(private router: Router, private cookieService: CookieService ) {
    const test: string = this.cookieService.get('Test');
    if (test === 'oui') {
      this.router.navigate(['dashboard']);
    }
    else {
      cookieService.set( 'Test', 'non');
    }
  }
}
