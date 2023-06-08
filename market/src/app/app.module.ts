import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductTypeRegistrationComponent } from './components/product-type/product-type-registration/product-type-registration.component';
import { ProductRegistrationComponent } from './components/product/product-registration/product-registration.component';
import { SaleRegistrationComponent } from './components/sale/sale-registration/sale-registration.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product/product.component';
import { ProductTypeComponent } from './components/product-type/product-type/product-type.component';
import { SaleComponent } from './components/sale/sale/sale.component';
import { SaleItemComponent } from './components/sale/sale-item/sale-item.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HomeComponent,
    ProductTypeComponent,
    ProductComponent,
    SaleComponent,
    SaleItemComponent,
    ProductTypeRegistrationComponent,
    ProductRegistrationComponent,
    SaleRegistrationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
