import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { Customer } from '../models/customer';
import { ProductOffer } from '../models/product-offer';
import { ProductComponent } from '../product/product.component';
import { ProductOfferComponent } from '../product-offer/product-offer.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [ProductComponent, ProductOfferComponent],
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.css'
})
export class ProductCatalogComponent {
  selectedIndex: number = -1;
  products: Product[] = [];
  
  constructor(productService: ProductsService){
    this.products = productService.getProducts();
  }

}
