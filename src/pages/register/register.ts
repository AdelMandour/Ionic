import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, Events } from 'ionic-angular';
import { FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  form : FormGroup;
  constructor(private storage: Storage,public navCtrl: NavController, public events: Events,private formBuilder: FormBuilder, public navParams: NavParams,public alertCtrl: AlertController) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['',Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPersonPage');
  }
  register = ()=>{
    /*let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'your name is '+this.form.value.name+' & your age is '+this.form.value.age,
      buttons: ['OK']
    });
    alert.present();*/
   // ListPage.addNewItem(this.form.value.name);

   this.storage.get('users').then((users)=>{
     let users_list = users || []
     users_list = [...users_list,{
       name: this.form.value.username,
       password : this.form.value.password
     }]
      this.storage.set('users',users_list);
      console.log("added")
      //s.navCtrl.push(ListPage);
   });
  }
}
