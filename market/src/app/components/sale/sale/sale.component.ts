import { CommonModule} from '@angular/common';
import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card';

import { SaleService } from './../../../services/sale/sale.service';
import { Sale } from './../../../models/sale';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class SaleComponent {
    
  displayedColumns: string[] = ['date_time', 'total', 'tax'];
  dataSource = new MatTableDataSource<Sale>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() onSelectSale = new EventEmitter<Sale>();  

  constructor( private service: SaleService ){}

  ngOnInit(): void {
    this.service.list().subscribe((list) => {
      this.dataSource = new MatTableDataSource<Sale>(list);
      this.dataSource.paginator = this.paginator;
    });    
  }

  onClickSale(value: Sale) {
    this.onSelectSale.emit(value);
  }
}
