import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { LoginService } from "../service/login.service";


@Injectable()
export class CanActivateAuth implements CanActivate {
  constructor(private log:LoginService) {}

   async canActivate(
    
  ):Promise<boolean> {
      const myRes =  await this.log.ifLogged()
       return myRes;
  }
}