import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  nameProp="";
  emailProp="";
  passwordProp="";
  mobileNoProp="";
  confirmPassProp="";
  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
   
  }

  signUP()
  { var acFound=false;
    if(this.nameProp!="" && this.emailProp!="" && this.passwordProp!="" && this.mobileNoProp!=""){
    this.ds.signIn()
    .subscribe((response)=>{
      if(response.status=="ok")
      {

        response.data.forEach(element => {
          if(element.email==this.emailProp){
        
            console.log(element.email,this.emailProp)
          acFound=true
          }
        
        });
      }
      if(acFound){
        alert("Account Already Exist")
      }
      else{
             this.ds.signUp({name:this.nameProp, email:this.emailProp, password:this.passwordProp ,phone:this.mobileNoProp})
        .subscribe((response)=>{
          if(response.status=="ok")
          {
              alert("Sign Up Successfull you will be redirected to sign in ");
              this.router.navigate(['/login']);
          }
        })
      }
    })
  }
  else{
    alert("fill all filds!")
  }
  
}
}
