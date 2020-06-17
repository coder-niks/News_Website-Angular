import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  emailProp;
  passwordProp;
  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }

  signin()
  {
      this.ds.signIn({email:this.emailProp, password:this.passwordProp})
      .subscribe((response)=>{
        if(response.status=="ok")
        {

          localStorage.setItem('email', this.emailProp);
          localStorage.setItem('name', response.data[0].name);
          this.router.navigate(['/chat-window']); 

        }
      })
  }

}
