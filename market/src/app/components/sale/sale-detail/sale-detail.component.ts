import { CommonModule } from '@angular/common';
import { SaleItemComponent } from './../sale-item/sale-item.component';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Sale } from 'src/app/models/sale';
import { SaleItem } from 'src/app/models/sale-item';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    SaleItemComponent,
    CommonModule
  ]
})
export class SaleDetailComponent {
  @Input() sale: Sale;

  getItems(): SaleItem[] {
    let items: SaleItem[] = [
      {
        quantity: 0,
        price: 0,
        tax: 0,
        id_product: ''
      }
    ];
    
    return this.sale ? this.sale.items : items;
  }
}
