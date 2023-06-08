import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

import { SaleService } from './../../../services/sale/sale.service';
import { Sale } from './../../../models/sale';
import { SaleItemComponent } from '../sale-item/sale-item.component';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
  standalone: true,
  imports: [MatTableModule, CommonModule]
})
export class SaleComponent {
  
  list: Sale[] = [];
  displayedColumns: string[] = ['date_time', 'total', 'tax'];

  comp: SaleItemComponent = new SaleItemComponent();
  constructor( private service: SaleService ){}

  ngOnInit(): void {
    this.service.list().subscribe((list) => {
      this.list = list;
    });    
  }
}
