import { AfterViewInit,Component, OnInit } from '@angular/core';
import { SpinnerService } from './service/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  enabled: boolean = false;
  title = 'companyCrm';


  constructor(private sp:SpinnerService){}

  ngAfterViewInit(){
  this.sp.enabled.subscribe((val)=>{
    this.enabled = val
      })
}
  ngOnInit(): void {
    }



}
