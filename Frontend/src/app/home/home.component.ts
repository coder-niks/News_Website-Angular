import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsList;
  constructor(private ds:DataService) { }

  ngOnInit(): void {

    this.ds.googleNews('google-news-in').subscribe((n)=>{
        this.newsList = n.articles;
    })
   
  }

  fetchNews(cat)
  {
    this.ds.fetchNews(cat).subscribe((n)=>{
      this.newsList = n.articles;
  })
  }

}
