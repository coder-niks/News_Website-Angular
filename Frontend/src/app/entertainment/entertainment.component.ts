import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  newsList;
  constructor(private ds:DataService) { }

  ngOnInit(): void {

    this.ds.fetchNews('entertainment').subscribe((n)=>{
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