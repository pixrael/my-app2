import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenRequestService {

  private tokenSource = new BehaviorSubject<string>(null);
  private token$ = this.tokenSource.asObservable();

  private url = environment.agileApiDomain;
  private apiKey = environment.apiKey;


  constructor(private http: HttpClient) { }

  requestToken(): void {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const body = { apiKey: this.apiKey };
    this.http.post(`${this.url}/auth`, body, { headers }).subscribe((response: { auth: boolean; token: string }) => {
      this.tokenSource.next(response.token);
    });
  }

  getToken$(): Observable<string> {
    return this.token$;
  }

  getToken(): string {
    return this.tokenSource.getValue();
  }
}
