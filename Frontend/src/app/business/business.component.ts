import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  newsList;
  constructor(private ds:DataService) { }

  ngOnInit(): void {

    this.ds.fetchNews('business').subscribe((n)=>{
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
