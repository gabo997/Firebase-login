import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../shared/services/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLogin:boolean = false;
  public username:string;
  public emailUser:string;
  public avatar:string;


  constructor(  private _fireLogout:FirebaseService,
                private _router:Router) { }

  ngOnInit() {
    this._fireLogout.getAuthentication()
      .subscribe( auth => {
        if(auth){
          this.isLogin = true;
          this.username = auth.displayName;
          this.emailUser = auth.email;
          this.avatar = auth.photoURL;
          console.log(this.avatar);
        }
      })
  }

  onClickLogout(){
    this._fireLogout.logout();
    this._router.navigate(['/home']);
  }
}
