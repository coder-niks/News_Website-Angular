import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.component.html',
  styleUrls: ['./newsdetails.component.css']
})
export class NewsdetailsComponent implements OnInit {

   
  
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

