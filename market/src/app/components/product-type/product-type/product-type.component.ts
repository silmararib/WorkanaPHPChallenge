import { Component } from '@angular/core';

import { ProductTypeService } from './../../../services/product-type/product-type.service';
import { ProductType } from './../../../models/product-type';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent {
  
  list: ProductType[] = [];

  constructor( private service: ProductTypeService ){}

  ngOnInit(): void {
    this.service.list().subscribe((list) => {
      this.list = list
      console.log('Product Type');
      console.log(this.list);
    });    
  }
}
