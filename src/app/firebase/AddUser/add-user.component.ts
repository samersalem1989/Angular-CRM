import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddUserService} from 'src/app/service/add-user.service';
import { SpinnerService } from 'src/app/service/spinner.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  myForm: FormGroup;
  constructor(private sign:AddUserService,fb: FormBuilder, private sp:SpinnerService,private router: Router ) { 
    this.myForm = fb.group({
      'firstName': ['',Validators.required],'lastName': ['',Validators.required],'email': ['',Validators.required],'address': ['',Validators.required]
      }
      );
  }


  ngOnInit(): void {
    this.sp.enabledOrNot(true)
    setTimeout(() =>{
      this.sp.enabledOrNot(false)
    },3)
  }

  onSubmit(myForm:any): void {
    console.log(myForm)
  }
  
  errorData=''
  userId = this.sign.userId
  addToFirebase(firstName:string,lastName:string,email: string,address: string){
    this.sign.addUser(firstName,lastName,email,address)
    .catch((err)=>{
      this.errorData=err
    }) 
  }
  

}



