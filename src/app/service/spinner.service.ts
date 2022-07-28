import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
 enabled = new BehaviorSubject<boolean>(false)

  constructor() { }

  enabledOrNot(status:boolean){
    this.enabled.next(status)
    }
  
}
