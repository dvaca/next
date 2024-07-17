import { Customer } from "./customer";
import { Product } from "./product";

export class ProductOffer {
    public product: Product = new Product(0,'','');
    public customer: Customer = new Customer(0,'');

    constructor(
      public productId: number,
      public providerId: number, 
      public description: string,
      public price: number) { }
  }