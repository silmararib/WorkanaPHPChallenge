import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductTypeRegistrationComponent } from './components/product-type/product-type-registration/product-type-registration.component';
import { ProductRegistrationComponent } from './components/product/product-registration/product-registration.component';
import { SaleRegistrationComponent } from './components/sale/sale-registration/sale-registration.component';
import { HomeModule } from './components/home/home.module';
import { ProductModule } from './components/product/product.module';
import { ProductTypeModule } from './components/product-type/product-type.module';
import { SaleModule } from './components/sale/sale.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductTypeRegistrationComponent,
    ProductRegistrationComponent,
    SaleRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    ProductModule,
    ProductTypeModule,
    SaleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
