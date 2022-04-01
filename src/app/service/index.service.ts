import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Carts, Products } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  private apiURL = 'https://my-json-server.typicode.com/TASNETWORK/Prueba-DJunior';

  items: Carts[] = [];

  public productList = new BehaviorSubject<any>([]);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  //VISUALIZAR PRODUCTOS
  getAll(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(this.apiURL + '/products')
    /*.pipe(
      catchError(this.errorHandler)
    )*/
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
