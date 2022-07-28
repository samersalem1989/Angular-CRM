import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(public readonly auth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router) { }

  user:any=null;
  

  signMe(email: string, password: string,confirm: string){
    console.log(email, password)
    return new Promise((resolve, reject)=>{
      if(password === confirm){
      this.auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        this.user = userCredential.user;
        this.router.navigate(['login'], { relativeTo: this.route })
        window.scroll(0,0);
      })
      .catch((error) => {
        // var errorCode = error.code;
        var errorData = error.message;
        reject(errorData)
      });
    } else{
      console.log("Your Password is not matched!")
    }

    })

  }
 
}