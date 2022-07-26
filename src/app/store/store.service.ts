import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  user: any;

  hide: boolean = false;

  private hidden = new Subject<any>();

  constructor() {
    // console.log(this.user);
  }

  get getUserData() {
    return this.user;
  }

  set setUserData(res: any) {
    this.user = { ...this.user, logged: true, ...res };
    // console.log(this.user);
    // console.log(this.user);
  }

  setHide(h: boolean) {
    this.hidden.next(h);
  }

  getHide(): Observable<any> {
    return this.hidden.asObservable();
  }
}
