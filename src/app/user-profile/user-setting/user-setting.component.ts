import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/store.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css'],
})
export class UserSettingComponent implements OnInit {
  constructor(
    private store: StoreService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  user: any = {
    name: '',
    username: '',
    email: '',
    phone: '',
    location: '',
    profilePic: '',
    banner: '',
  };

  ngOnInit(): void {
    this.user = { ...this.user, ...this.store.getUserData };
    console.log(this.store.getUserData);
  }

  fileUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (event.target.name === 'profilePic') {
        this.user.profilePic = reader.result as string;
      } else {
        this.user.banner = reader.result as string;
      }
    };
    reader.readAsDataURL(file);
  }

  onSave() {
    this.authService.updateUser(this.user._id, this.user).subscribe((res) => {
      this.store.setUserData = res;
      // console.log(res);
    });
  }
}
