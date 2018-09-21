import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {


  city: string;
  code: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }


  saveForm() {

    const location = {
      city: this.city,
      code : this.code
    };

    localStorage.setItem('location', JSON.stringify(location));
    this.router.navigate(['dashboard']);
  }

}
