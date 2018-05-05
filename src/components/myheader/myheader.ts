import { Component, ViewChild, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { MyApp } from '../../app/app.component';
import { LoginPage } from '../../pages/login/login';
import { ToursPage } from '../../pages/tours/tours';
import { AddTourPage } from '../../pages/add-tour/add-tour';
import { RegisterPage } from '../../pages/register/register';
/**
 * Generated class for the AddTourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'my-header',
  templateUrl: 'myheader.html',
})
export class MyHeaderPage {
    @Input() title;
    constructor(private storage: Storage, 
        public navCtrl: NavController, 
        public events: Events, private formBuilder: FormBuilder, 
        public navParams: NavParams,
        public _myapp:MyApp,
         public alertCtrl: AlertController) {
    }
    clickmymenu(){
        this.storage.get("logged").then((user) => {
            if (!user) {
              console.log("if")
              this._myapp.pages = [
                { title: 'login', component: LoginPage },
                { title: 'Tours', component: ToursPage },
                { title: 'addTour', component: AddTourPage },
                { title: 'register', component: RegisterPage }
              ];
              // this.nav.setRoot(LoginPage);
            } else {
              console.log("else")
              this._myapp.pages = [
                { title: 'logout', component: LoginPage },
                { title: 'Tours', component: ToursPage },
                { title: 'addTour', component: AddTourPage },
                { title: 'register', component: RegisterPage }
              ];
            }
          });
    }
}