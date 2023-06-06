import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductTypeRegistrationComponent } from './components/product-type/product-type-registration/product-type-registration.component';
import { ProductRegistrationComponent } from './components/product/product-registration/product-registration.component';
import { SaleRegistrationComponent } from './components/sale/sale-registration/sale-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductTypeRegistrationComponent,
    ProductRegistrationComponent,
    SaleRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
