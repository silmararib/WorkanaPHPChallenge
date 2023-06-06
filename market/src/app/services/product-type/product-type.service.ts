import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import { ProductType } from './../../models/product-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  private readonly apiUrl = environment.apiUrl + '/product-types';

  constructor(private http: HttpClient) { }

  list(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(this.apiUrl)
  }
}
