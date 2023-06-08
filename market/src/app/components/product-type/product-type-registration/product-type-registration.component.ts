import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { ProductTypeService } from './../../../services/product-type/product-type.service';
import { ProductType } from './../../../models/product-type';

@Component({
  selector: 'app-product-type-registration',
  templateUrl: './product-type-registration.component.html',
  styleUrls: ['./product-type-registration.component.css'],
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, MatDividerModule, MatCardModule]
})
export class ProductTypeRegistrationComponent {
  
  type: ProductType = {
    code: "",
    description: "",
    tax_rate: 0.00
  };

  constructor( private service: ProductTypeService ){}

  onSave(){
    this.service.save(this.type).subscribe();
  }
}
