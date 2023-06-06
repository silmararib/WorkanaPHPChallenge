import { Component } from '@angular/core';

import { ProductTypeService } from './../../../services/product-type/product-type.service';
import { ProductType } from './../../../models/product-type';

@Component({
  selector: 'app-product-type-registration',
  templateUrl: './product-type-registration.component.html',
  styleUrls: ['./product-type-registration.component.css']
})
export class ProductTypeRegistrationComponent {
  
  type: ProductType = {
    code: "code",
    description: "description",
    tax_rate: 0.50
  };

  constructor( private service: ProductTypeService ){}

  ngOnInit(): void {
    this.service.save(this.type).subscribe();
  }
}
