import { AfterContentInit, Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SpinnerService } from '../service/spinner.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements AfterContentInit {

  constructor(private db: AngularFirestore,private sp:SpinnerService) { }
  
  contacts:any=[]

  ngAfterContentInit(): void {
    this.getContacts()
  }

  getContacts(): void {
    this.sp.enabledOrNot(true)
    this.db.firestore.collection("contacts").get().then((querySnapshot) => {
      this.sp.enabledOrNot(false)
      querySnapshot.forEach((doc) => {
          this.contacts.push(doc.data())
          console.log(this.contacts)
      });
    });
    }

  search='';


  ngOnInit(): void {
  }

}
