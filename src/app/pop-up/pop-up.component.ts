<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 95fdaaa24317e1e2a7e081d8a82281323f76351b
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
<<<<<<< HEAD
=======
=======
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
>>>>>>> b085c3df9617578b4fff5138ec20f7e0e4bc8a1d
>>>>>>> 95fdaaa24317e1e2a7e081d8a82281323f76351b


 export class PopUpComponent implements OnInit, AfterViewInit {
  @ViewChild('openModal') openModal: ElementRef;

<<<<<<< HEAD
  title = 'app works!';
=======
<<<<<<< HEAD
  title = 'app works!';
=======

  city: string;
  code: string;

  constructor(private router: Router) { }
>>>>>>> b085c3df9617578b4fff5138ec20f7e0e4bc8a1d
>>>>>>> 95fdaaa24317e1e2a7e081d8a82281323f76351b

   constructor(private modalService: NgbModal) { }
   ngAfterViewInit() {
    setTimeout(() => this.ngOnInit());
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 95fdaaa24317e1e2a7e081d8a82281323f76351b
   ngOnInit() {
     this.openModal.nativeElement.click();
  }
   open(content) {
       this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }


 }


<<<<<<< HEAD
=======
=======

  saveForm() {

    const location = {
      city: this.city,
      code : this.code
    };

    localStorage.setItem('location', JSON.stringify(location));
    this.router.navigate(['dashboard']);
  }

}
>>>>>>> b085c3df9617578b4fff5138ec20f7e0e4bc8a1d
>>>>>>> 95fdaaa24317e1e2a7e081d8a82281323f76351b
