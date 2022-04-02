import { Component, Input, OnInit } from '@angular/core';
import { IndexService } from 'src/app/service/index.service';
import { PipeFilterPipe } from 'src/app/pipes/pipe-filter.pipe';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() data?: any;
  @Input() search?: any;
  @Input() searchCategory?: any;

  productsCart:any = [];

  constructor(private cartService: IndexService) { }

  ngOnInit(): void {

  }


  addCart(item: any){
    this.cartService.addToCart(item)
  }

  onChange($event:any, item:any){
    const id = $event.target.value;
    const checked = $event.target.checked;
    if (checked) {
      this.agregar(item);
    }else{
      this.quitar(item);
    }
    /*const id = $event.target.value;
    const checked = $event.target.checked;

    this.data.map((res:any) => {
      if (res.id === id) {
        res.available = checked;
        return res;
      }
      return res;
    });
    console.log(this.data);*/
  }

  agregar(item: any) { // Agregamos el elemento
    this.productsCart.push(item);
    console.log(this.productsCart);
  }

  quitar(item: any) { // Filtramos el elemento para que quede fuera
    this.productsCart = this.productsCart.filter((s:any) => {s !== item});
    console.log(this.productsCart);
  }

  cargar(){
    if (this.productsCart.length > 0 || !this.productsCart) {
      this.productsCart.forEach((element:any) => {
        this.addCart(element);
      });
    }else{
      alert('DEBE ELEGIR UN PRODUCTO')
    }
  }

}
