import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/product';
import { IndexService } from 'src/app/service/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  products: Products[] = [];

  constructor(public productsService: IndexService) { }

  ngOnInit(): void {
    this.productsService.getAll().subscribe((data: Products[])=>{
      this.products = data;
      console.log(this.products);
    })
  }

}
