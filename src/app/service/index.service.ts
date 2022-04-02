import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Carts, Products, Categories } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  private apiURL = 'https://my-json-server.typicode.com/TASNETWORK/Prueba-DJunior';

  items: Carts[] = [];

  public productList = new BehaviorSubject<any>([]);

  public search = new BehaviorSubject<string>("");



  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  //VISUALIZAR PRODUCTOS
  getAll(){
    return this.httpClient.get<any>(this.apiURL + '/products').pipe(
      map((res:any)=> {
        return res;
      })
    )
  }
  /*getAll(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(this.apiURL + '/products').pipe(
      map((res:any)=> {
        return res;
      })
    )
    .pipe(
      catchError(this.errorHandler)
    )
  }*/

  //VISUALIZA CATEGORIAS
  getCategories(): Observable<Categories[]> {
    return this.httpClient.get<Categories[]>(this.apiURL + '/categories')
  }

  //VISUALIZAR LOS CARTS
  getCarts(){
    return this.productList.asObservable();
  }


  //AÑADIR AL CARRITO
  addToCart(product: any) {
    this.items.push(product);
    this.productList.next(this.items);
    console.log(this.items);
  }

  //MOSTRAR CARRITO
  getItems() {
    return this.items;
  }

  //BORRAR CARRITO
  clearCart() {
    this.items = [];
    return this.items;
  }

  /*errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }*/
}
