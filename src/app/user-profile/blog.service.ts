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
    // console.log(id);
    return this.http.get(`http://localhost:3000/api/user/blog/${id}`);
  }

  getSingleBlog(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/api/user/blog/u/${id}`);
  }

  postBlog(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/user/blog', data);
  }

  editBlog(data: any, id: any): Observable<any> {
    return this.http.put(`http://localhost:3000/api/user/blog/${id}`, data);
  }

  deleteBlog(id: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/user/blog/${id}`);
  }

  getAllBlogs(): Observable<any> {
    return this.http.get('http://localhost:3000/api/user/blog/card/data');
  }
}
