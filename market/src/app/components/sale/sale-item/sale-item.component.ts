import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SaleItem } from 'src/app/models/sale-item';

@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class SaleItemComponent {
  
  @Input() list: SaleItem[] = [];
  displayedColumns: string[] = ['code', 'product', 'unit_price', 'quantity', 'price', 'tax_rate', 'tax'];
  
}
