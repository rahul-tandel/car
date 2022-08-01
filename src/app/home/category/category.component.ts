import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/user-profile/blog.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(private blogService: BlogService) {}

  blogs: any;

  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe((res) => {
      this.blogs = res;
    });
  }
}
