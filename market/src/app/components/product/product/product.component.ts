import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { ProductService } from './../../../services/product/product.service';
import { Product } from './../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class ProductComponent {
  
  list: Product[] = [];
  displayedColumns: string[] = ['code', 'description', 'unit_price', 'type_description', 'tax_rate'];

  constructor( private service: ProductService ){}

  ngOnInit(): void {
    this.service.list().subscribe((list) => {
      this.list = list
    });    
  }
}
