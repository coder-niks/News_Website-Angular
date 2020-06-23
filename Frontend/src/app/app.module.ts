import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ArtComponent } from './art/art.component';
import { BusinessComponent } from './business/business.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MagazineComponent } from './magazine/magazine.component';
import { PoliticsComponent } from './politics/politics.component';
import { SportsComponent } from './sports/sports.component';
import { TravelComponent } from './travel/travel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WebsiteComponent } from './website/website.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexInnerComponent } from './index-inner/index-inner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AdminWebsiteComponent } from './admin-website/admin-website.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminMagazineComponent } from './admin-magazine/admin-magazine.component';
import { AdminAdvertiseComponent } from './admin-advertise/admin-advertise.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ArtComponent,
    BusinessComponent,
    ContactusComponent,
    MagazineComponent,
    PoliticsComponent,
    SportsComponent,
    TravelComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    WebsiteComponent,
    DashboardComponent,
    IndexInnerComponent,
    PageNotFoundComponent,
    LoginComponent,
    AdminWebsiteComponent,
    AdminHomeComponent,
    AdminCategoryComponent,
    AdminNewsComponent,
    AdminMagazineComponent,
    AdminAdvertiseComponent,
    AdminHeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
