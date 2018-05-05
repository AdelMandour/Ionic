import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, Events } from 'ionic-angular';
import { FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { RegisterPage } from '../register/register';
import { ToursPage } from '../tours/tours';
import { AddTourPage } from '../add-tour/add-tour';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  form : FormGroup;
  constructor(private storage: Storage,
    public navCtrl: NavController, 
    public events: Events,
    private formBuilder: FormBuilder,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['',Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPersonPage');
  }
  login = ()=>{
    /*let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'your name is '+this.form.value.name+' & your age is '+this.form.value.age,
      buttons: ['OK']
    });
    alert.present();*/
   // ListPage.addNewItem(this.form.value.name);
   console.log("before")
   this.storage.get('users').then((users)=>{
    users && users.forEach(user => {
        if(user.name==this.form.value.username){
          if(user.password==this.form.value.password){
            this.storage.set("logged",user);
          }
        }
      });
     });
      //s.navCtrl.push(ListPage);
  }
  register = ()=>{
    this.navCtrl.push(RegisterPage);
  }
}
