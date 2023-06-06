import { Component } from '@angular/core';

import { ProductService } from './../../../services/product/product.service';
import { Product } from './../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  
  list: Product[] = [];

  constructor( private service: ProductService ){}

  ngOnInit(): void {
    this.service.list().subscribe((list) => {
      this.list = list
      console.log('Product');
      console.log(this.list);
    });    
  }
}
