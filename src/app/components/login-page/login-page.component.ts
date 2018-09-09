import { Component, OnInit } from '@angular/core';
import {  FirebaseService } from "../../shared/services/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public email:string;
  public password:string;

  constructor( private _fireLogin: FirebaseService,
              private _router:Router) { }

  ngOnInit() {
  }

  simpleAuth(){
    
    this._fireLogin.login(this.email,this.password)
    .then( response =>{
        console.log("Inicio de Sesion exitoso!");
        console.log(response);
        this._router.navigate(['/dashboard']);
    }).catch(error =>{
      console.log("Inicio de Sesion fallido");
      console.log(error);
    });

  }

}
