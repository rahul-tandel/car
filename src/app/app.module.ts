import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsComponent } from './user-profile/forms/forms.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileHomeComponent } from './user-profile/profile-home/profile-home.component';
import { DataTablesModule } from 'angular-datatables';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BlogComponent } from './user-profile/blog/blog.component';
import { UserSettingComponent } from './user-profile/user-setting/user-setting.component';
import { CategoryComponent } from './home/category/category.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    UserProfileComponent,
    FormsComponent,
    NavbarComponent,
    ProfileHomeComponent,
    BlogComponent,
    UserSettingComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    AuthModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
