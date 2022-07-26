import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css'],
})
export class ProfileHomeComponent implements OnInit {
  constructor(private store: StoreService, private blogService: BlogService) {}

  blogs: any = [];
  user: any;

  ngOnInit(): void {
    // console.log(this.store.getUserData);
    this.store.setHide(false);
    this.user = this.store.getUserData;
    this.blogService.getBlog(this.user._id).subscribe((res) => {
      // console.log(res);
      this.blogs = res;
    });
  }
}
