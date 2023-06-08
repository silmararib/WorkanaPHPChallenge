import { Component } from '@angular/core';

import { SaleService } from './../../../services/sale/sale.service';
import { Sale } from './../../../models/sale';
import { SaleItem } from 'src/app/models/sale-item';

@Component({
  selector: 'app-sale-registration',
  templateUrl: './sale-registration.component.html',
  styleUrls: ['./sale-registration.component.css'],
  standalone: true
})
export class SaleRegistrationComponent {

  item: SaleItem = {
    quantity: 1,
    price: 5.00,
    tax: 0.1,
    id_product: 'c15b1aaa-4dd9-4776-b9bb-d0178e24f468', 
  }

  sale: Sale = {
    total: 5.00,
    tax: 0.50,
    items: [this.item]
  };

  constructor( private service: SaleService ){}

  ngOnInit(): void {
    this.service.save(this.sale).subscribe();    
  }
}
