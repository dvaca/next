import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { ProductsMock } from '../mocks/products-mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private config: ConfigService) { }

  getProducts() { 
    if (this.config.DB_CONNECTION_ENABLED){ 
      console.log('getProducts Not implemented yet');
      return [];
    }else{
      return this.getProductsMockup();
    }
  }

  getProductsMockup() { 
    const pm: ProductsMock = new ProductsMock()
    return pm.PRODUCTS;
  }

}
