import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { ProductTypeService } from './../../../services/product-type/product-type.service';
import { ProductType } from './../../../models/product-type';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class ProductTypeComponent {
  
  list: ProductType[] = [];
  displayedColumns: string[] = ['code', 'description', 'tax_rate'];

  constructor( private service: ProductTypeService ){}

  ngOnInit(): void {
    this.service.list().subscribe((list) => {
      this.list = list
    });    
  }
}
