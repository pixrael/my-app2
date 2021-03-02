import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageRequestService {

  private imagesDataSource = new BehaviorSubject<any>(null);
  private imagesData$ = this.imagesDataSource.asObservable();

  private url = environment.agileApiDomain;
  private apiKey = environment.apiKey;

  private token = '';

  constructor(private http: HttpClient) { }


  getImagesData$(): Observable<any> {
    return this.imagesData$;
  }

  requestImages(token: string): void {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.http.get(`${this.url}/images`, { headers }).subscribe((response: any) => {
      this.imagesDataSource.next(response);
    });

  }
}
