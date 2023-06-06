import { Component } from '@angular/core';

import { SaleService } from './../../../services/sale/sale.service';
import { Sale } from './../../../models/sale';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {
  
  list: Sale[] = [];

  constructor( private service: SaleService ){}

  ngOnInit(): void {
    this.service.list().subscribe((list) => {
      this.list = list
      console.log('Sale');
      console.log(this.list);
    });    
  }
}
