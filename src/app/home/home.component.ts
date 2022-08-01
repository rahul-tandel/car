import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { StoreService } from '../store/store.service';
import { BlogService } from '../user-profile/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private storeService: StoreService,

    private authService: AuthService
  ) {}

  user: any;

  users: any;

  blogs: any;

  ngOnInit(): void {
    this.user = this.storeService.user;

    this.authService.getAllUser().subscribe((res) => {
      this.users = res.filter((r: any, i: any) => {
        if (i < 3) {
          return r;
        }
      });
    });
  }
}
