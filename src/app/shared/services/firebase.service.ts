import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { map } from "rxjs/operators";

//import to the model
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  userLoged:User;
  constructor(private _afAuth: AngularFireAuth) { }

  //all methods returns a promise 

  registerUser(email: string, passw:string){
    return new Promise( (resolve, reject)=>{
      this._afAuth.auth.createUserWithEmailAndPassword(email, passw) 
      .then(userData =>{ 
        resolve(userData);
        //this._getAuthentication();
      }, 
        error => reject(error));
    });
  }

  login(email: string, passw:string){ 
    return new Promise( (resolve, reject)=>{
      this._afAuth.auth.signInWithEmailAndPassword(email, passw)
      .then(userData =>{
        resolve(userData);
       // this._getAuthentication();
      }, 
        error => reject(error));
    });
  }

  loginWithGoogle(){
    return this._afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  loginWithTwitter(){
    return this._afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
  }

  loginWithFacebook(){
    return this._afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  //get data of the user in caseloged
  getAuthentication(){
    return this._afAuth.authState.pipe(map (auth => auth));
   /* this._afAuth.authState.pipe(map (auth => auth))
      .subscribe( auth => {
        if(auth){
          this.userLoged.isLogin = true;
          this.userLoged.username = auth.displayName;
          this.userLoged.emailUser = auth.email;
          this.userLoged.avatar = auth.photoURL;
         // console.log(this.avatar);
        }
      });*/
  }

  logout(){
    return this._afAuth.auth.signOut();
  }
}
