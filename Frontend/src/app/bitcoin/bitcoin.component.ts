import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {

  newsList;
  constructor(private ds:DataService) { }

  ngOnInit(): void {

    this.ds.bitcoinNews('bitcoin').subscribe((n)=>{
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
