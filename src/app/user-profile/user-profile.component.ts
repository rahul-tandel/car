import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store/store.service';
import { BlogService } from './blog.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  constructor(
    private store: StoreService,
    private blogService: BlogService,
    private authService: AuthService
  ) {}

  user: any = '';

  blogs: any = [
    {
      title: '',
      content: '',
    },
  ];

  ngOnInit(): void {
    // console.log('ein');
    // this.authService.getUser(localStorage.getItem('token')).subscribe((res) => {
    //   this.store.setUserData = res[0];
    // });
    // console.log(this.store.getUserData);
    // this.blogService.getBlog(this.store.getUserData._id).subscribe((res) => {
    //   console.log(res);
    //   this.blogs = res;
    // });
    // this.user = this.store.getUserData;
    // console.log(this.store.getUserData.name);
  }

  ngAfterViewInit() {}

  handleLogout() {
    localStorage.clear();
  }
}
