import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  constructor(private store: StoreService) {}

  user: any = '';

  ngOnInit(): void {
    this.user = this.store.getUserData;
    // console.log(this.store.getUserData.name);
  }
}
