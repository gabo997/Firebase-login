import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../shared/services/firebase.service";
import { Router } from "@angular/router";

import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  email:string;
  password:string;

  constructor(private _registerFire: FirebaseService,
              private _router: Router,
              private _flashMessage: FlashMessagesService) { }


    register(){
      
      this._registerFire.registerUser(this.email,this.password)
      .then( response =>{
          console.log(response);
          this._flashMessage.show('El registro se ha compeltado exitosamente!',{ cssClass: 'alert-success', timeout: 4000});
          this._router.navigate(['/dashboard']);
      }).catch(error =>{
        this._flashMessage.show(`Ha ocurrido un error al registrar ${ error }`,{ cssClass: 'alert-danger', timeout: 4000});
        console.log(error);
      });
    }

    ngOnInit() {
    }
  
}
