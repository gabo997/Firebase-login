import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { AngularFireAuth } from "angularfire2/auth";
import { FirebaseService } from "../shared/services/firebase.service";

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  
  constructor(  private _router:Router,
                private _afAuth:AngularFireAuth,
                private _authService:FirebaseService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._afAuth.authState
      .take(1)
      .map(authState => !! authState)
      .do(authenticated => {
        if(!authenticated)
          this._router.navigate(['/login']);
      });
  }
}
