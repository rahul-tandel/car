import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  user: any;

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
}
