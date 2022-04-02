import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Carts } from 'src/app/interface';
import { IndexService } from 'src/app/service/index.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() title?: String;

  carts: Carts[] = [];


  constructor(private productService : IndexService,public modalReference:NgbActiveModal) { }

  ngOnInit(): void {
    this.productService.getCarts()
    .subscribe((data: Carts[])=>{
      this.carts = data;
    })
  }

  clear(){
    //console.log('funcion')
    this.productService.clearCart();
    this.carts = [];
  }

}
