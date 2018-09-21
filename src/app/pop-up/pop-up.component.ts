 import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
 import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
 import * as $ from 'jquery';
 interface AfterViewInit {
  ngAfterViewInit(): void;
}
 @Component({
   selector: 'app-pop-up',
   templateUrl: './pop-up.component.html',
   styleUrls: ['./pop-up.component.css']
 })
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



 export class PopUpComponent implements OnInit, AfterViewInit {
  @ViewChild('openModal') openModal: ElementRef;

  title = 'app works!';

  title = 'app works!';


  city: string;
  code: string;

  constructor(private router: Router) { }
   constructor(private modalService: NgbModal) { }
   ngAfterViewInit() {
    setTimeout(() => this.ngOnInit());
  }


   ngOnInit() {
     this.openModal.nativeElement.click();
  }
   open(content) {
       this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }


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
