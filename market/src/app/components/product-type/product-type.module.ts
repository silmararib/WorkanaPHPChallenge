import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductTypeComponent } from './product-type/product-type.component';

@NgModule({
  declarations: [
    ProductTypeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductTypeComponent
  ]
})
export class ProductTypeModule { }
