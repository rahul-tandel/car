import { Component, OnInit, SimpleChanges } from '@angular/core';

import { StoreService } from 'src/app/store/store.service';
import { BlogService } from '../blog.service';
import swal from 'sweetalert';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css'],
})
export class ProfileHomeComponent implements OnInit {
  constructor(
    private store: StoreService,
    private blogService: BlogService,
    private authService: AuthService,
    private router: Router
  ) {}

  search: string = '';
  blogs: any = [];
  user: any;
  page = 1;

  currentLastI = 5;
  currentStartI = 0;
  // currentFirsti = 0
  // nextI = this.currentLastI + 5;

  prev = [];
  current = this.blogs.slice(this.currentStartI, this.currentLastI);
  next = this.blogs.slice(this.currentStartI + 5, this.currentLastI + 5);

  nextPage() {
    if (this.next.length !== 0) {
      this.page++;
      this.prev = this.current;
      this.current = this.next;
      this.currentLastI = this.currentLastI + 5;
      this.currentStartI = this.currentStartI + 5;
      this.next = this.blogs.slice(
        this.currentStartI + 5,
        this.currentLastI + 5
      );
    }
  }

  prevPage() {
    if (this.prev.length !== 0) {
      this.page--;
      this.next = this.current;
      this.current = this.prev;
      this.currentLastI = this.currentLastI - 5;
      this.currentStartI = this.currentStartI - 5;
      this.prev = this.blogs.slice(
        this.currentStartI - 5,
        this.currentLastI - 5
      );
    }
  }

  logOut() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
    this.router.navigate(['/auth']);
  }

  ngOnInit(): void {
    // this.currentLastI = this.currentLastI + 5;
    // console.log(this.blogs);
    // console.log(this.store.getUserData);
    // console.log('ASdsd');
    this.store.setHide(false);
    this.user = this.store.getUserData;
    // this.store.getUserData().subscribe((res) => {
    //   this.user = res[0];
    // });
    // console.log(this.user);
    this.blogService.getBlog(this.user.id).subscribe((res) => {
      // console.log(res);
      this.blogs = res;
      this.current = this.blogs.slice(this.currentStartI, this.currentLastI);
      this.next = this.blogs.slice(
        this.currentStartI + 5,
        this.currentLastI + 5
      );
    });
  }

  delete(id: any) {
    this.blogService.deleteBlog(id).subscribe((res) => {
      this.ngOnInit();
      swal({
        title: 'Success',
        text: 'Blog Deleted',
        icon: 'success',
        buttons: {
          confirm: {
            text: 'OK',
            closeModal: true,
          },
        },
      });
    });
  }
}
