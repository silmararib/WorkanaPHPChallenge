import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleComponent } from './sale/sale.component';

@NgModule({
  declarations: [
    SaleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SaleComponent
  ]
})
export class SaleModule { }
