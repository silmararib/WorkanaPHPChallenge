import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductTypeRegistrationComponent } from './components/product-type/product-type-registration/product-type-registration.component';
import { ProductRegistrationComponent } from './components/product/product-registration/product-registration.component';
import { SaleRegistrationComponent } from './components/sale/sale-registration/sale-registration.component';
import { ProductTypeComponent } from './components/product-type/product-type/product-type.component';
import { ProductComponent } from './components/product/product/product.component';
import { SaleComponent } from './components/sale/sale/sale.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductTypeRegistrationComponent,
    ProductRegistrationComponent,
    SaleRegistrationComponent,
    ProductTypeComponent,
    ProductComponent,
    SaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
