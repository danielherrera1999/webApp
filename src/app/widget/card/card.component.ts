import { Component, Input, OnInit } from '@angular/core';
import { IndexService } from 'src/app/service/index.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  /*@Input() image?: String;
  @Input() name?: String;
  @Input() categories?: Number[];
  @Input() description?: String;*/

  @Input() data?: any[];

  constructor(private cartService: IndexService) { }

  ngOnInit(): void {
  }


  addCart(item: any){
    this.cartService.addToCart(item)
  }

}
