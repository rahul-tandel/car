import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  constructor(private blogService: BlogService, private store: StoreService) {}

  blog = {
    user_id: '',
    title: '',
    content: '',
  };

  ngOnInit(): void {
    this.blog.user_id = this.store.getUserData._id;
  }

  submit() {
    this.blogService.postBlog(this.blog).subscribe((res) => {
      this.blogService.getBlog(this.blog.user_id);
    });
  }
}
