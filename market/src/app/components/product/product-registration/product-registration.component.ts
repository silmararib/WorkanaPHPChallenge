import { Component } from '@angular/core';

import { ProductService } from './../../../services/product/product.service';
import { Product } from './../../../models/product';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css']
})
export class ProductRegistrationComponent {

  product: Product = {
    code: "code",
    description: "description",
    unit_price: 5.00,
    type: "857b1eb3-4fd1-4246-9c00-6bce9437d94d"
  };

  constructor( private service: ProductService ){}

  ngOnInit(): void {
    this.service.save(this.product).subscribe();    
  }
}
