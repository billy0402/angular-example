import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product!: Product;

  constructor() {
  }

  ngOnInit(): void {
  }

}
