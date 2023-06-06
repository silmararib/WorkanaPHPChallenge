import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleRegistrationComponent } from './sale-registration.component';

describe('SaleRegistrationComponent', () => {
  let component: SaleRegistrationComponent;
  let fixture: ComponentFixture<SaleRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleRegistrationComponent]
    });
    fixture = TestBed.createComponent(SaleRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
