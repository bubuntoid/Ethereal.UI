import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url: string = `${environment.apiUrl}/api/main`;

  constructor(private http: HttpClient) { }
}
