import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {
  url: string = `${environment.apiUrl}/api/preview`;

  constructor(private http: HttpClient) { }

  private getHeaders() : HttpHeaders {
    return new HttpHeaders({'Content-Type': 'text/plain'});
  }

  getDescriptionPreview(youtubeVideoUrl:string){
    return this.http.post(`${this.url}/description`, {'url': youtubeVideoUrl}, {responseType: 'text'});
  }
}
