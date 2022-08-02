import { Component, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private store: StoreService) {
    this.sub = this.store.getHide().subscribe((h) => {
      // console.log(h);
      this.hide = h;
      this.showSettings = true;
      this.id = this.store.getUserData?._id;
    });
  }

  hide: boolean = false;
  showSettings = false;
  id = '';

  private sub: Subscription;

  ngOnInit(): void {
    // this.hide = this.store.hide;
    // if (this.hide !== this.va) {
    //   this.ngOnInit();
    //   this.va = this.hide;
    // }
    // console.log(this.store.hide);
    // console.log('HU');
    // this.store.getHide().subscribe((s) => {
    //   console.log(s);
    //   this.hide = s;
    // });
  }

  ngAfterViewInit() {
    // console.log(this.store.hide);
  }
}
