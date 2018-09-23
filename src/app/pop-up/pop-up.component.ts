
import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { Router } from '@angular/router';
interface AfterViewInit {
  ngAfterViewInit(): void;
}

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})


export class PopUpComponent implements OnInit, AfterViewInit {
  public value = true;
  public testValue = { value: true };
  city: string;
  code: string;

  @ViewChild('openModal') openModal: ElementRef;

  title = 'app works!';

  constructor(private modalService: NgbModal, private router: Router) { }
  ngAfterViewInit() {
    setTimeout(() => this.ngOnInit());
  }


  ngOnInit() {
    this.openModal.nativeElement.click();
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  saveForm() {
    const location = {
      city: this.city,
      code: this.code
    };
    localStorage.setItem('location', JSON.stringify(location));
    this.router.navigate(['dashboard']);
  }


}

