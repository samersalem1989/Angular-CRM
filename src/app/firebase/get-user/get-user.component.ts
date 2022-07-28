import { AfterContentInit, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {  Router } from '@angular/router';
import { AddUserService } from 'src/app/service/add-user.service';
import { SpinnerService } from 'src/app/service/spinner.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements AfterContentInit {

  constructor(private db: AngularFirestore,private router: Router,private sign:AddUserService,private sp:SpinnerService) { }
  search='';

  ngAfterContentInit(): void {
    this.getData()
  }

  ngOnInit(): void {
  }

users:any=[]

chosenOne(i,user){
  const theId = user.id
  this.router.navigate(['/home/get-user',theId])
  this.sign.showUserId(i,user)
}
getData() {
  return new Promise(async (resolve,reject)=>{
  this.sp.enabledOrNot(true)
  this.db.firestore.collection("users").get().then((querySnapshot) => {
    this.sp.enabledOrNot(false)
    querySnapshot.forEach((doc) => {
      resolve(this.users.push(doc.data()))
        console.log(this.users)
    })
  })
})
  }

delete(e,user){
  this.db.firestore.collection("users").doc(user.id).delete();
  this.sp.enabledOrNot(true)
  e.stopPropagation();
  
  setTimeout(() =>{
    this.sp.enabledOrNot(false)
    location.reload();
    window.alert("Document successfully deleted!")

  },1000)

}
  

update(i,user){
  this.sign.userToUpdate(i,user)
}

}
