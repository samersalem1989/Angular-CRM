import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  userId: string;
  firstToUpdate:string 
  lastToUpdate:string 
  emailToUpdate:string
  addressToUpdate:string

  constructor(
    // private route: ActivatedRoute,
    private router: Router,
    private db: AngularFirestore,
    private sp:SpinnerService) { }

  addUser(firstName: string, lastName: string,email: string,address: string) {
    return new Promise((resolve, reject)=>{
    const newDoc = this.db.firestore.collection("users").doc()
    this.userId = newDoc.id
    this.sp.enabledOrNot(true)
    newDoc.set({
      id: this.userId,
      first: firstName,
      last: lastName,
      email : email,
      address: address
  })
  .then(() => {
     this.sp.enabledOrNot(false)
      console.log("Document written with ID: ", newDoc.id);
      this.router.navigate(['../get-user'])
  })
  .catch((error) => {
    this.sp.enabledOrNot(false)
      console.error("Error adding document: ", error);
      var errorData = error.message;
        reject(errorData)
  });
})
}

      

      showUserId(i,user){
        this.firstToUpdate = user.first
        this.lastToUpdate = user.last
        this.emailToUpdate = user.email
        this.addressToUpdate = user.address
      }

      userToUpdate(i,user){
          this.firstToUpdate = user.first
          this.lastToUpdate = user.last
          this.emailToUpdate = user.email
          this.addressToUpdate = user.address
          this.router.navigate(['update'])
      }

}
