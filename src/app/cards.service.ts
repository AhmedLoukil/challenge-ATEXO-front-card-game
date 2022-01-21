import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private resourceUrl = 'http://localhost:8080/cards';

  constructor(private http: HttpClient) { }

  distributes(): Observable<Card[]>{
    return this.http.get<Card[]>(`${this.resourceUrl}/distributes/10`);
  }

  orderByValue(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.resourceUrl}/order-by-value`);
  }

  orderByColor(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.resourceUrl}/order-by-color`);
  }

  clearHand(): Observable<{}>{
    return this.http.delete(`${this.resourceUrl}/clear-hand`);
  }

}
