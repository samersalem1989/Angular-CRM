import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(private log:LoginService,fb: FormBuilder) {
    this.myForm = fb.group({

      'email': ['',Validators.required],'password': ['',Validators.required]
      
      }
      );

   }

  errorData=''

  login(email: string,password: string){
    this.log.logMe(email,password).catch((err)=>{
      this.errorData=err
    })
  }

  onSubmit(theForm:any){
    console.log(theForm)
  }

  onActivate(event) {
    window.scroll(0,0);    
}
  

  ngOnInit(): void {
  }

}

