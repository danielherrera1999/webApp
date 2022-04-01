import { Component, OnInit } from '@angular/core';
import { IndexService } from 'src/app/service/index.service';

import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;

  constructor(private productService : IndexService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.productService.getCarts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  openModal(){
    //this.modalService.open(CartComponent)
    const modalRef = this.modalService.open(CartComponent);
    modalRef.componentInstance.title = 'CARTS';
  }

}
