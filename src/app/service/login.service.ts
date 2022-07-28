import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public readonly auth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router) { }

  user:any=null;
  
  logMe(email: string, password: string){
    console.log(email, password)
    return new Promise((resolve, reject)=>{
      this.auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // var user = userCredential.user;
        this.user = userCredential.user;
        this.router.navigate(['home'], { relativeTo: this.route })
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorData = error.message;
        reject(errorData)
      });

    })

  }
  ifLogged():Promise<boolean>{
    return new Promise(async (resolve, reject)=>{
      if(this.user){
        resolve(true)
        return
      }
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user
        resolve(true)
      } else {
        this.user = null
        this.router.navigate(['login'], { relativeTo: this.route })
        resolve(false)
            }
    });
  });
  }

  getMail(){
    if(this.user && this.user.email){
    return this.user.email
    } else {
      return''
    }
  }

  logOut(){
    setTimeout(() => {
      this.auth.signOut()
      this.router.navigate(['login'], { relativeTo: this.route})
    },1000)
  }

}
