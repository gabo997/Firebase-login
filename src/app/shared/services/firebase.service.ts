import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { map } from "rxjs/operators";

//import { Observable } from 'rxjs/observable';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private _afAuth: AngularFireAuth) { 
  }

  registerUser(email: string, passw:string){
    
    return new Promise( (resolve, reject)=>{
      this._afAuth.auth.createUserWithEmailAndPassword(email, passw) 
      .then(userData => resolve(userData), 
        error => reject(error));
    });
  }

  
  login(email: string, passw:string){
    
    return new Promise( (resolve, reject)=>{
      this._afAuth.auth.signInWithEmailAndPassword(email, passw)
      .then(userData => resolve(userData), 
        error => reject(error));
    });
  }

  //obtenemos los datos del usuario en caso de que este logeado
  getAuthentication(){
    return this._afAuth.authState.pipe(map (auth => auth));
  }


  logout(){
    return this._afAuth.auth.signOut();
  }
}
