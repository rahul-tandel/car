import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface User {
  username: '';
  password: '';
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  createUser(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/user', data);
  }

  loginUser(data: any): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/user/login', data);
  }
}
