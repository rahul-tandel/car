import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store/store.service';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  constructor(private store: StoreService, private blogService: BlogService) {}

  user: any = '';

  blogs: any = [
    {
      title: '',
      content: '',
    },
  ];

  ngOnInit(): void {
    this.blogService.getBlog(this.store.getUserData._id).subscribe((res) => {
      console.log(res);
      this.blogs = res;
    });
    this.user = this.store.getUserData;
    // console.log(this.store.getUserData.name);
  }
}
