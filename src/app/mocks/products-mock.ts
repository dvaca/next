import { Product } from '../models/product';
import { Customer } from '../models/customer';
import { ProductOffer } from '../models/product-offer';

export class ProductsMock {
    p1: Product = new Product(1, 'Product 1', 'This is Product 1'); 
    p2: Product = new Product(2, 'Product 2', 'This is Product 2'); 
    p3: Product = new Product(3, 'Product 3', 'This is Product 3'); 

    constructor(){
        const po1 = new ProductOffer(1, 1, 'desc 1', 100.0);
        po1.customer = new Customer(1, 'tales');
        this.p1.offers.push(po1);
        const po2 = new ProductOffer(2, 1, 'desc 2', 200.0);
        po2.customer = new Customer(1, 'tales');
        this.p2.offers.push(po2);
        const po3 = new ProductOffer(3, 1, 'desc 3', 555.5)
        po3.customer = new Customer(1, 'tales');
        this.p3.offers.push(po3);
        const po4 = new ProductOffer(3, 2, 'desc 33', 535.3)
        po4.customer = new Customer(2, 'Gcamacho');
        this.p3.offers.push(po4);

    }

    public PRODUCTS: Product[] = [
            this.p1,
            this.p2,
            this.p3,
        ];

}