import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddUserService } from 'src/app/service/add-user.service';
import { SpinnerService } from 'src/app/service/spinner.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  myForm: FormGroup;

  passedFirst:string
  passedLast:string
  passedEmail:string
  passedAddress:string
  constructor(private sign:AddUserService,fb: FormBuilder,private db: AngularFirestore,private router: Router, private sp:SpinnerService) { 
    this.myForm = fb.group({
      'firstName': [this.sign.firstToUpdate,Validators.required],'lastName': [this.sign.lastToUpdate,Validators.required],'email': [this.sign.emailToUpdate,Validators.required],'address': [this.sign.addressToUpdate,Validators.required]
      }
      );
  }

  ngOnInit(): void {
    this.passedFirst = this.sign.firstToUpdate
    this.passedLast = this.sign.lastToUpdate
    this.passedEmail = this.sign.emailToUpdate
    this.passedAddress = this.sign.addressToUpdate
  }


  onSubmit(myForm:any): void {
    console.log(myForm)
  }
  
  errorData=''

  UpdateToFirebase(firstName:string,lastName:string,email: string,address: string){
    return new Promise((resolve, reject)=>{
      this.sp.enabledOrNot(true)
      const updateDoc = this.db.firestore.collection("users").where("first","==",this.sign.firstToUpdate).where("last","==",this.sign.lastToUpdate).where("email","==",this.sign.emailToUpdate).where("address","==",this.sign.addressToUpdate);
      updateDoc.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.ref.set({
            first: firstName,
            last: lastName,
            email: email,
            address: address
        },{merge: true})
            })})
    .then(() => {
       this.sp.enabledOrNot(false)
       window.alert("Document successfully Updated!")
       setTimeout(() => {
        resolve(this.router.navigate(['get-user']))
      }, 100);
    })
    .catch((error) => {
      this.sp.enabledOrNot(false)
        console.error("Error adding document: ", error);
        var errorData = error.message;
          reject(errorData)
    });
  })

}
    
}
