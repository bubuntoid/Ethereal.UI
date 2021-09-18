import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url: string = `${environment.apiUrl}/api/jobs`;

  constructor(private http: HttpClient) { }

  initializeJob(youtubeVideoUrl:string, description:string){
    return this.http.post<any>(`${this.url}/initialize`, {'url': youtubeVideoUrl, 'description': description}, {responseType: 'json'});
  }

  getJob(id:string){
    return this.http.get<any>(`${this.url}/${id}`, {responseType: 'json'});
  }
}
