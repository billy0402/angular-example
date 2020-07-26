import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor(
    private httpService: HttpService
  ) {
  }

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): Observable<Product[]> {
    return this.httpService.getData<Product[]>('/fixtures/shipping.json');
  }

}
