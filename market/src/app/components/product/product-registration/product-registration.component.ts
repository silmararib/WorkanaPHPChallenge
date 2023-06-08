import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

import { ProductService } from './../../../services/product/product.service';
import { Product } from './../../../models/product';
import { ProductTypeService } from 'src/app/services/product-type/product-type.service';
import { ProductType } from 'src/app/models/product-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css'],
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
    CommonModule
  ]
})
export class ProductRegistrationComponent {

  product: Product = {
    code: "",
    description: "",
    unit_price: 0.00,
    id_product_type: ""
  };

  types: ProductType[] = [];

  constructor( private service: ProductService, private typeService: ProductTypeService ){}

  ngOnInit() {
    this.typeService.list().subscribe((types) => {
      this.types = types;
    })
  }

  onSave(){
    this.service.save(this.product).subscribe();    
  }
}
