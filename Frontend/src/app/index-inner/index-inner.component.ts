import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../services/corona.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-index-inner',
  templateUrl: './index-inner.component.html',
  styleUrls: ['./index-inner.component.css']
})
export class IndexInnerComponent implements OnInit {

  countries:any
  country:any
  confirmed:Number
  recovered:Number
  deaths:Number

  constructor(private corona:CoronaService){}

  ngOnInit(){
    this.corona.getCountries().subscribe((data)=>{
      console.log(data)
      this.countries = data
    })
    
  }
    getCoronaData(){
      this.corona.getCoronaRealTimeData(this.country).subscribe((data) => {
        console.log(data)
        var index = data.length - 1
        console.log(index)
        this.confirmed = data[index].Confirmed
        this.recovered = data[index].Recovered
        this.deaths = data[index].Deaths
      }) 
    }
    getCountry(country:any){
      this.country = country  

    }


  }
