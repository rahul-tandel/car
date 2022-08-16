import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  user: any;

  hide: boolean = false;

  private hidden = new Subject<any>();
  private user$ = new Subject<any>();

  constructor(private authService: AuthService) {
    // console.log(this.user);
    this.getProfile();
  }

  public getProfile() {
    this.authService.getUser(localStorage.getItem('token')).subscribe(
      (res) => {
        this.user = res[0];
        this.user$.next(this.user);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  get getUserData() {
    return this.user;
  }

  set setUserData(res: any) {
    console.log(res);
    this.user = { logged: true, ...res };
    // console.log(this.user);
    // console.log(this.user);
  }

  setHide(h: boolean) {
    this.hidden.next(h);
  }

  getHide(): Observable<any> {
    return this.hidden.asObservable();
  }

  getUser(): Observable<any> {
    return this.user$.asObservable();
  }
}
