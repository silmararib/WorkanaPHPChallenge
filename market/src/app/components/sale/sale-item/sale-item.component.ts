import { Component } from '@angular/core';
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
  
  list: SaleItem[] = [];
  displayedColumns: string[] = ['quantity', 'price', 'tax'];
  
}
