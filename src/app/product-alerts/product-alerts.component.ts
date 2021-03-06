import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product!: Product;
  @Output() notify = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
