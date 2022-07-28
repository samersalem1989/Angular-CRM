import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddUserService } from 'src/app/service/add-user.service';

@Component({
  selector: 'app-choose-one',
  templateUrl: './choose-one.component.html',
  styleUrls: ['./choose-one.component.css']
})
export class ChooseOneComponent implements OnInit,OnDestroy {

  constructor(private route: ActivatedRoute,private sign:AddUserService) { }
  
  id: string;
  private sub: any;
  passedFirst:string;
  passedLast:string;
  passedEmail:string;
  passedAddress:string;

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
  });

    this.passedFirst = this.sign.firstToUpdate
    this.passedLast = this.sign.lastToUpdate
    this.passedEmail = this.sign.emailToUpdate
    this.passedAddress = this.sign.addressToUpdate
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
