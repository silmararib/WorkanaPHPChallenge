import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import { Sale } from './../../models/sale';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private readonly apiUrl = environment.apiUrl + '/sales';

  constructor(private http: HttpClient) { }

  list(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.apiUrl)
  }

  save(sale: Sale): Observable<Sale> {
    return this.http.post<Sale>(this.apiUrl, sale);
  }
}
