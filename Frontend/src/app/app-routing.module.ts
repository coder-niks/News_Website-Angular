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



const routes: Routes = [
 
  {path: '', component:WebsiteComponent, children:[
                                                    {path:'', component:HomeComponent},
                                                    {path:'about', component:AboutComponent},
                                                    {path:'art', component:ArtComponent},
                                                    {path:'business', component:BusinessComponent},
                                                    {path:'contactus', component:ContactusComponent},
                                                    {path:'magazine', component:MagazineComponent},
                                                    {path:'politics', component:PoliticsComponent},
                                                    {path:'sports', component:SportsComponent},
                                                    {path:'travel', component:TravelComponent},
  ]},
  {path: 'dashboard', component:DashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
