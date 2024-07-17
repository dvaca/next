import { Component, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor() { 
  }

  @Input()
  product: Product = new Product(0,'','');

  addToCart(product: Product) {
    window.alert('Your product has been added to the cart!');
  }
}