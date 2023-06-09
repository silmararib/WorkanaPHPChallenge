import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatCardModule } from '@angular/material/card';

import { ProductService } from './../../../services/product/product.service';
import { Product } from './../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class ProductComponent {
  
  displayedColumns: string[] = ['code', 'description', 'unit_price', 'type_description', 'tax_rate'];
  dataSource = new MatTableDataSource<Product>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private service: ProductService ){}
  
  ngOnInit(): void {
    this.service.list().subscribe((list) => {
      this.dataSource = new MatTableDataSource<Product>(list);
      this.dataSource.paginator = this.paginator;
    });    
  }
}
