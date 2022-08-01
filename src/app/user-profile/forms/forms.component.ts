import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';

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

  imgUrl?: string;

  blog = {
    user_id: '',
    title: '',
    summary: '',
    content: '',
    blogImage: '',
  };

  clear() {
    this.blog = {
      user_id: this.blog.user_id,
      title: '',
      content: '',
      blogImage: '',
      summary: '',
    };
  }

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
    if (this.id) {
      this.blogService.editBlog(this.blog, this.id).subscribe((res) => {
        swal({
          title: 'Success',
          icon: 'success',
          text: 'Blog Ediit Succesfully',
          buttons: {
            confirm: {
              text: 'Ok',
              closeModal: true,
            },
          },
        });
      });
    } else {
      console.log(this.blog);

      this.blogService.postBlog(this.blog).subscribe((res) => {
        console.log(res);
        swal({
          title: 'Success',
          icon: 'success',
          text: 'Blog Created Succesfully',
          buttons: {
            confirm: {
              text: 'Ok',
              closeModal: true,
            },
          },
        });
        // this.blogService.getBlog(this.blog.user_id);
        this.clear();
      });
    }
  }

  changeProfile(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.blog.blogImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
