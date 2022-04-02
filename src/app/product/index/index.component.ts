import { Component, OnInit } from '@angular/core';
import { Categories, Products } from 'src/app/interface';
import { IndexService } from 'src/app/service/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  products: Products[] = [];
  categories: Categories[] = [];

  public filterCategory : any;
  searchKey:string ="";

  public searchProduct !: string;
  public searchCategory !: string;

  constructor(public productsService: IndexService) { }

  ngOnInit(): void {
    /*this.productsService.getAll().subscribe((data: Products[])=>{
      this.products = data;
    })*/

    this.productsService.getAll()
    .subscribe(res => {
      this.products = res;
      this.filterCategory = res;

      /*this.products.forEach((a:any) => {

      })*/
    })

    this.productsService.getCategories().subscribe((data: Categories[]) => {
      this.categories = data;
    })

    this.productsService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  search(event:any){
    this.searchProduct = (event.target as HTMLInputElement).value;
    console.log(this.searchProduct);
    //this.cartService.search.next(this.searchTerm);
  }

  select(event:any){
    this.searchCategory = (event.target as HTMLInputElement).value;
    console.log(this.searchCategory);
    //this.cartService.search.next(this.searchTerm);
  }

  filter(category:string){
    this.filterCategory = this.products
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
}
