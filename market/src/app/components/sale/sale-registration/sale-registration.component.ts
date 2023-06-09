import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleService } from './../../../services/sale/sale.service';
import { Sale } from './../../../models/sale';
import { SaleItem } from 'src/app/models/sale-item';
import { Product } from './../../../models/product';
import { SaleItemComponent } from '../sale-item/sale-item.component';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-sale-registration',
  templateUrl: './sale-registration.component.html',
  styleUrls: ['./sale-registration.component.css'],
  standalone: true,
  imports: [
    SaleItemComponent,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    CommonModule,
    MatDividerModule,
    MatInputModule
  ]
})
export class SaleRegistrationComponent {

  item: SaleItem = {
    quantity: 1,
    price: 0,
    tax: 0,
    id_product: '',
    unit_price: 0,
    product_code: '',
    product_description: '',
    tax_rate: 0
  }

  sale: Sale = {
    total: 0,
    tax: 0,
    items: []
  };

  products: Product[] = [];

  constructor( private service: SaleService, private productService: ProductService ){}

  ngOnInit(): void {
    this.productService.list().subscribe((products) => {
      this.products = products;
    });
  }

  onSave(){
    this.service.save(this.sale).subscribe();
  }

  onAddItem(){
    let list = this.sale.items;
    this.sale.items = [];
    this.sale.items.push(...list, this.item);
    this.sale.total += this.item.price;
    this.sale.tax += this.item.tax;
    this.resetItem();
  }

  onUpdateItem() {    
    let product = this.products.find(x => x.id == this.item.id_product);
    
    this.item.unit_price = product ? product.unit_price : 0;
    this.item.price = this.item.quantity * this.item.unit_price;

    this.item.tax_rate = product && product.tax_rate ? product.tax_rate : 0;
    this.item.tax = this.item.price * this.item.tax_rate / 100;

    this.item.product_code = product ? product.code : '';
    this.item.product_description = product ? product.description : '';    
  }

  resetItem() {
    this.item = {      
      quantity: 1,
      price: 0,
      tax: 0,
      id_product: '',
      unit_price: 0,
      product_code: '',
      product_description: '',
      tax_rate: 0
    }
  }

}
