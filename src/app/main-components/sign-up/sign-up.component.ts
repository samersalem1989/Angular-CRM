import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { SignUpService } from 'src/app/service/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  myForm: FormGroup;

  constructor(private sign:SignUpService,fb: FormBuilder) {
    this.myForm = fb.group({

      'email': ['',Validators.required],'password': ['',Validators.required],'passwordConfirm': ['',Validators.required]
      
      }
      );

   }

  errorData=''

  signUp(email: string,password: string,confirm:string){
    this.sign.signMe(email,password,confirm).catch((err)=>{
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


