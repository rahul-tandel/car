import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() type: string = '';
  @Output() toggle = new EventEmitter<string>();

  classes = ['d-none'];

  toggleView() {
    // console.log('click');
    this.toggle.emit(this.type);
  }

  constructor(
    private route: Router,
    private store: StoreService,
    private authService: AuthService
  ) {}

  userData = {
    name: '',
    username: '',
    password: '',
  };

  submit() {
    if (this.type === 'Login') {
      this.authService.loginUser(this.userData).subscribe((res) => {
        // console.log(res);
        this.store.setUserData = res.user[0];
        this.route.navigate(['user/home']);
        this.store.setHide(false);
      });
    } else {
      this.authService.createUser(this.userData).subscribe((res) => {
        this.store.setUserData = res;
        this.route.navigate(['user/home']);
        this.store.setHide(false);
      });
    }
  }

  ngOnInit(): void {
    // if (localStorage.getItem('token')) {
    //   this.authService
    //     .getUser(localStorage.getItem('token'))
    //     .subscribe((res) => {
    //       this.store.setUserData = res[0];
    //       this.route.navigate(['user/home']);
    //       // console.log(res);
    //       // this.store.setHide(false);
    //     });
    // }
  }
}
