import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  newsList;
  constructor(private ds:DataService) { }

  ngOnInit(): void {

    this.ds.googleNews('google-news-in').subscribe((n)=>{
        this.newsList = n.articles;
    })
  }
}