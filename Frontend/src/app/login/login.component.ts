import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  acFound=false;
  emailProp="";
  passwordProp="";
  constructor(private router:Router, private ds:DataService) { }
  details=[];

  ngOnInit(): void {
  }

  signin()
  { var acFound=false;
     
     if(this.emailProp !="" && this.passwordProp!=""){
      // {email:this.emailProp, password:this.passwordProp}
      this.ds.signIn()
      .subscribe((response)=>{
       
        if(response.status=="ok")
        {

          // localStorage.setItem('email', this.emailProp);
          // localStorage.setItem('name', response.data[0].name);
          // this.data=response.data[0].password
          response.data.forEach(element => {
            // this.details.push(element.name)
            // console.log(element.email,element.password)
            if(element.email==this.emailProp && element.password==this.passwordProp){
              acFound=true
              console.log(element.email, element.password)
              localStorage.setItem('email', element.email);
              localStorage.setItem('name', element.name);
              this.router.navigate(['/admin-dashboard']); 
              
            }
          }
          
            );
        }
        if(acFound==false) {
          alert("somthing went wrong")
        }
        
      })
     }
  }
}
