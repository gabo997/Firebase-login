import { Component, OnInit } from '@angular/core';
import {  FirebaseService } from "../../shared/services/firebase.service";

import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public email:string;
  public password:string;

  constructor( private _fireLogin: FirebaseService,
              private _router:Router,
              private _flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  simpleAuth(){
    
    this._fireLogin.login(this.email,this.password)
    .then( response =>{
        console.log(response);
        this._flashMessage.show(`Te damos la bienvenida :)`,{ cssClass: 'alert-success', timeout: 3000});
        this._router.navigate(['/dashboard']);
    }).catch(error =>{
      this._flashMessage.show(`error: ${ error }`,{ cssClass: 'alert-danger', timeout: 4000});
      console.log(error);
    });
  }

  onClickLoginGoogle(){
    this._fireLogin.loginWithGoogle()
    .then(response =>{
      this._router.navigate(['/dashboard']);
    }).catch( error =>{
      console.log(error.message);
    });
  }

  onClickLoginFacebook(){
    this._fireLogin.loginWithFacebook()
    .then(response =>{
      this._router.navigate(['/dashboard']);
    }).catch( error =>{
      console.log(error.message);
    });
  }

  onClickLoginTwitter(){
    this._flashMessage.show(`Estamos trabajando para permitirte esta funcionalidad :)`,{ cssClass: 'alert-info', timeout: 2000});
   /* this._fireLogin.loginWithTwitter()
    .then(response =>{
      this._router.navigate(['/dashboard']);
    }).catch( error =>{
      console.log(error.message);
    });*/
  }
}
