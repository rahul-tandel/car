import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  getBlog(id: string): Observable<any> {
    console.log(id);
    return this.http.get(`http://localhost:3000/api/user/blog/${id}`);
  }

  postBlog(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/user/blog', data);
  }
}
