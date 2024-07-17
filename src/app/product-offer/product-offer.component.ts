import { Component, Input } from '@angular/core';
import { ProductOffer } from '../models/product-offer';

@Component({
  selector: 'app-product-offer',
  standalone: true,
  imports: [],
  templateUrl: './product-offer.component.html',
  styleUrl: './product-offer.component.css'
})
export class ProductOfferComponent {

  @Input()
  productOffer: ProductOffer = new ProductOffer(0, 0, '', 0.0);

}
