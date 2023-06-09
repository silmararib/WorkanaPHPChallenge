import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductTypeComponent } from '../product-type/product-type/product-type.component';
import { ProductTypeRegistrationComponent } from '../product-type/product-type-registration/product-type-registration.component';
import { ProductComponent } from '../product/product/product.component';
import { ProductRegistrationComponent } from '../product/product-registration/product-registration.component';
import { SaleComponent } from '../sale/sale/sale.component';
import { SaleDetailComponent } from '../sale/sale-detail/sale-detail.component';
import { Sale } from 'src/app/models/sale';
import { SaleRegistrationComponent } from '../sale/sale-registration/sale-registration.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [
        MatTabsModule,
        ProductTypeComponent,
        ProductTypeRegistrationComponent,
        ProductComponent,
        ProductRegistrationComponent,
        SaleComponent,
        SaleDetailComponent,
        SaleRegistrationComponent
    ]
})
export class HomeComponent {
    sale: Sale;

    onSelectSale(sale: Sale) {
        this.sale = sale;
        console.log(this.sale);
    }
}
 