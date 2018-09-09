import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../shared/services/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  email:string;
  password:string;

  constructor(private _registerFire: FirebaseService,
              private _router: Router) { }


    register(){
      
      this._registerFire.registerUser(this.email,this.password)
      .then( response =>{
          console.log("Registro Exitoso");
          console.log(response);
          this._router.navigate(['/dashboard']);
      }).catch(error =>{
        console.log("Registro fallido");
        console.log(error);
      });
    }

    ngOnInit() {
    }
  
}
