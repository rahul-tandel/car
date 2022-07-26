import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  constructor(
    private blogService: BlogService,
    private store: StoreService,
    private router: ActivatedRoute
  ) {}

  blog = {
    user_id: '',
    title: '',
    content: '',
  };

  id: string | null = '';

  ngOnInit(): void {
    this.blog.user_id = this.store.getUserData._id;
    this.id = this.router.snapshot.paramMap.get('id');
    if (this.id) {
      this.blogService.getSingleBlog(this.id).subscribe((res) => {
        // console.log(res);
        this.blog = res;
      });
    }
    // if(this.blog.user_id)
  }

  submit() {
    this.blogService.postBlog(this.blog).subscribe((res) => {
      this.blogService.getBlog(this.blog.user_id);
    });
  }
}
