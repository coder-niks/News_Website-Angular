import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  login(data):any
  {
    return this.http.post(this.baseURL+"/login", data);
  }
  submit(data):any
  {
    return this.http.post(this.baseURL+"/submit", data);
  }



  fetchNews(cat):any
  {
    
    return this.http.get('http://newsapi.org/v2/top-headlines?country=in&category='+cat+'&apiKey=50f9a005636a4e9590ead4a2063e99de');
  }

  googleNews(src):any
  {
    
    return this.http.get('http://newsapi.org/v2/top-headlines?sources='+src+'&apiKey=50f9a005636a4e9590ead4a2063e99de');
  }
  bitcoinNews(q):any
  {
    
    return this.http.get('http://newsapi.org/v2/everything?q='+q+'&from=2020-05-26&sortBy=publishedAt&apiKey=50f9a005636a4e9590ead4a2063e99de');
  }
}
