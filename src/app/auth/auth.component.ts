import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { StoreService } from '../store/store.service';
import { Router } from '@angular/router';

// import { Location } from '@angular/common';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private storeStore: StoreService,
    private router: Router
  ) {}

  formType: string = '';

  classes = ['d-block '];
  Sclasses = ['d-block'];

  ngOnInit(): void {
    // this.storeStore.setHide = true;
    // console.log(this.storeStore.hide);
    // console.log(this.storeStore.user.logged);
    // if (this.storeStore.user.logged) {
    //   console.log('user');
    // }
    // console.log(this.storeStore.getUserData);
    this.storeStore.setHide(true);
    if (this.storeStore.getUserData) {
      this.router.navigate(['user/home']);
    }
  }

  toggle(data: any) {
    if (data === 'Sign up') {
      this.classes = ['d-block'];
      this.Sclasses = ['d-none'];
    } else {
      this.classes = ['d-none'];
      this.Sclasses = ['d-block'];
    }
  }

  // submit() {
  //   this.userData.profilePic = 'asdsadsadasdasdasd';
  //   // console.log(this.userData);
  //   // this.authService.createUser(this.userData).subscribe((res) => {
  //   //   this.storeStore.setUserData = res;
  //   //   // this.router.navigateByUrl('/home');
  //   //   this.router.navigate(['/user']);
  //   // });
  //   this.authService.loginUser(this.userData).subscribe((res) => {
  //     console.log(res);
  //     this.storeStore.setUserData = res?.user;

  //     this.router.navigate(['/user']);
  //   });
  //   // this.authService;
  // }
}
