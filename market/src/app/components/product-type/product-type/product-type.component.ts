import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card';

import { ProductTypeService } from './../../../services/product-type/product-type.service';
import { ProductType } from './../../../models/product-type';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css'],
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class ProductTypeComponent {
  
  displayedColumns: string[] = ['code', 'description', 'tax_rate'];
  dataSource = new MatTableDataSource<ProductType>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private service: ProductTypeService ){}

  ngOnInit(): void {
    this.service.list().subscribe((list) => {
      this.dataSource = new MatTableDataSource<ProductType>(list);
      this.dataSource.paginator = this.paginator;
    });    
  }
}
