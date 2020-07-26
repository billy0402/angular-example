import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shippingCosts$!: Observable<Product[]>;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.shippingCosts$ = this.cartService.getShippingPrices();
  }

}
