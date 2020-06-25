import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm:FormGroup;
  @ViewChild('fff') myDiv;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      email:['', Validators.required],
      passMatch: this.fb.group({
        password:['', [Validators.required, Validators.minLength(8)]],
        cpassword: ['', Validators.required]
      }, {validator:this.passMatchValidation }),     

      srName:['',this.myValidation ]

    })

  }

  myValidation( ele:AbstractControl ) : { [key:string]: any} | null
  {
    var value = ele.value;

    if(value == "joshi")
    {
        return null;
    }
    else{
        return { "srname": true }
    }

  }

  passMatchValidation ( ele:AbstractControl ) : { [key:string]: any} | null
  {
    var value = ele.get('password').value;
    var value2 = ele.get('cpassword').value;

    if(value == value2)
    {
        return null;
    }
    else{
        return { "passMatch": true }
    }

  }


  changeColor()
  {
      // alert("sdfgd");
      this.myDiv.nativeElement.style.backgroundColor= "red";
  }


}
