import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypeRegistrationComponent } from './product-type-registration.component';

describe('ProductTypeRegistrationComponent', () => {
  let component: ProductTypeRegistrationComponent;
  let fixture: ComponentFixture<ProductTypeRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTypeRegistrationComponent]
    });
    fixture = TestBed.createComponent(ProductTypeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
