import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';
import { VirtualTimeScheduler } from 'rxjs';

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

  name = 'nma.jpg';

  blog = {
    user_id: '',
    title: '',
    summary: '',
    content: '',
    blogImage: '',
    imageName: '',
  };

  clear() {
    this.blog = {
      user_id: this.blog.user_id,
      title: '',
      content: '',
      blogImage: '',
      summary: '',
      imageName: '',
    };
  }

  id: string | null = '';

  ngOnInit(): void {
    this.blog.user_id = this.store.getUserData.id;
    this.id = this.router.snapshot.paramMap.get('id');
    if (this.id) {
      this.blogService.getSingleBlog(this.id).subscribe((res) => {
        // console.log(res);
        this.blog = { ...res, imageName: 'image.jpg' };
      });
    }
    // if(this.blog.user_id)
  }

  submit() {
    // console.log(this.blog);
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
      // console.log(this.blog);

      this.blogService.postBlog(this.blog).subscribe((res) => {
        // console.log(res);
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
    // console.dir(event.target.files[0].name);
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.blog.imageName = file.name;
      this.blog.blogImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
