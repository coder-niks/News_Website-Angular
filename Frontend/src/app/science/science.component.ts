import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

 
  newsList;
  constructor(private ds:DataService) { }

  ngOnInit(): void {

    this.ds.fetchNews('science').subscribe((n)=>{
        this.newsList = n.articles;
    })
  }
}
