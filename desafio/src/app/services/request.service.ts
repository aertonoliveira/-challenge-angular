import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countries } from '../models/countries.interface';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient
  ) { }

  getCountry(): Observable<Countries[]> {
    return this.http.get<Countries[]>('https://restcountries.com/v3.1/all');
  }
}
