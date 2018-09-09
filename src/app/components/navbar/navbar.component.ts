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
  public userName:string;
  public emailUser:string;

  constructor(  private _fireLogout:FirebaseService,
                private _router:Router) { }

  ngOnInit() {
    this._fireLogout.getAuthentication()
      .subscribe( auth => {
        if(auth){
          this.isLogin = true;
          this.userName = auth.displayName;
          this.emailUser = auth.email;
        }
      })
  }

  onClickLogout(){
    this._fireLogout.logout();
    this._router.navigate(['/home']);
  }
}
