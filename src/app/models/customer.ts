import { ProductOffer } from "./product-offer";

export class Customer {
    
  public offers: ProductOffer[] = [];

    constructor(
      public id: number, 
      public name: string) { }
  }