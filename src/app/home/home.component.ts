import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private storeService: StoreService) {}

  user: any;

  ngOnInit(): void {
    this.user = this.storeService.user;
  }
}
