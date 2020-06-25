import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  newsList;
  constructor(private ds:DataService) { }

  ngOnInit(): void {

    this.ds.fetchNews('sports').subscribe((n)=>{
        this.newsList = n.articles;
    })
  }

}
