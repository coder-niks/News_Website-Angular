import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ArtComponent } from './art/art.component';
import { BusinessComponent } from './business/business.component';
import { ContactusComponent } from './contactus/contactus.component';
import { IndexInnerComponent } from './index-inner/index-inner.component';
import { MagazineComponent } from './magazine/magazine.component';
import { PoliticsComponent } from './politics/politics.component';
import { SportsComponent } from './sports/sports.component';
import { TravelComponent } from './travel/travel.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    AboutComponent,
    ArtComponent,
    BusinessComponent,
    ContactusComponent,
    IndexInnerComponent,
    MagazineComponent,
    PoliticsComponent,
    SportsComponent,
    TravelComponent
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
