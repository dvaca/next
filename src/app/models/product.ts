import { ProductOffer } from "./product-offer";

export class Product {
    
  public offers: ProductOffer[] = [];

    constructor(
      public id: number, 
      public name: string, 
      public description: string) { }
  }