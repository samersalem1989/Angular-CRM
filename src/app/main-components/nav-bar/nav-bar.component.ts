import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private log:LoginService) { }
  email:string=''

  ngOnInit(): void {
    this.email = this.log.getMail()
  }

  logOut(){
    this.log.logOut()
  }

}
