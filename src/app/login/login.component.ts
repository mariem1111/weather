import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  cookieValue = 'kkkk';


  constructor(private router: Router, private cookieService: CookieService ) { }
  username: string;
  password: string;
  test: boolean;

  ngOnInit() {
  }
  login(): void {

    if (this.username === 'admin' && this.password === 'admin') {
      this.cookieService.set( 'Test', 'oui');
      this.router.navigate(['popUp']);
    } else {
      this.cookieService.set( 'Test', 'non');
      alert('Invalid credentials');

    }
  }
getCookie(key: string) {
    return this.cookieService.get(key);
  }
}

