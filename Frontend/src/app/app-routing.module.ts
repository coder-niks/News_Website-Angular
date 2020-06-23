import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArtComponent } from './art/art.component';
import { BusinessComponent } from './business/business.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MagazineComponent } from './magazine/magazine.component';
import { PoliticsComponent } from './politics/politics.component';
import { TravelComponent } from './travel/travel.component';
import { WebsiteComponent } from './website/website.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SportsComponent } from './sports/sports.component';
import { IndexInnerComponent } from './index-inner/index-inner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminAdvertiseComponent } from './admin-advertise/admin-advertise.component';
import { AdminMagazineComponent } from './admin-magazine/admin-magazine.component';
import { AdminWebsiteComponent } from './admin-website/admin-website.component';


const routes: Routes = [
 
  {path: '', component:WebsiteComponent, children:[
                                                    {path:'', component:HomeComponent},
                                                    {path:'home', component:HomeComponent},
                                                    {path:'about', component:AboutComponent},
                                                    {path:'art', component:ArtComponent},
                                                    {path:'business', component:BusinessComponent},
                                                    {path:'contactus', component:ContactusComponent},
                                                    {path:'magazine', component:MagazineComponent},
                                                    {path:'politics', component:PoliticsComponent},
                                                    {path:'sports', component:SportsComponent},
                                                    {path:'travel', component:TravelComponent},
                                                    {path:'index-inner', component:IndexInnerComponent},
                                                    {path:'page_not_found', component:PageNotFoundComponent},
                                                    {path:'contact', component:ContactusComponent},
                                                  ]},
  {path: 'login', component:LoginComponent},
  {path:'admin-dashboard',component:AdminWebsiteComponent, children:[
                                                        
                                                        {path:'admin-home', component:AdminHomeComponent},
                                                        {path:'admin-news', component:AdminNewsComponent},
                                                        {path:'admin-category', component:AdminCategoryComponent},
                                                        {path:'admin-advertise', component:AdminAdvertiseComponent},
                                                        {path:'admin-magazine', component:AdminMagazineComponent},                                                  
                                                      ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
