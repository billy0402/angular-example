import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { products } from '../../fixtures/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const index = Number(params.get('productId'));
      this.product = products[index];
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
