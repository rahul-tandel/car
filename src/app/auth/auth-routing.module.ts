import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from '../user-profile/blog/blog.component';
import { FormsComponent } from '../user-profile/forms/forms.component';
import { ProfileHomeComponent } from '../user-profile/profile-home/profile-home.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserSettingComponent } from '../user-profile/user-setting/user-setting.component';
import { AuthComponent } from './auth.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'user',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'form',
        component: FormsComponent,
      },
      {
        path: 'form/:id',
        component: FormsComponent,
      },
      {
        path: 'home',
        component: ProfileHomeComponent,
      },
      {
        path: 'blog/:id',
        component: BlogComponent,
      },
      {
        path: ':id',
        component: UserSettingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
