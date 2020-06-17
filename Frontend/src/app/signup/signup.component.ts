import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  nameProp;
  emailProp;
  passwordProp;
  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  signUP()
  {
      this.ds.signUp({name:this.nameProp, email:this.emailProp, password:this.passwordProp})
      .subscribe((response)=>{
        if(response.status=="ok")
        {
            alert("Sign Up Successfull you will be redirected to sign in ");
            this.router.navigate(['/']);
        }
      })
  }

}
