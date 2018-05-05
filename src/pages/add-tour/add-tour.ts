import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { MapLocationPage } from '../map-location/map-location';
import { AddFromMapPage } from '../add-from-map/add-from-map';
/**
 * Generated class for the AddTourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-tour',
  templateUrl: 'add-tour.html',
})
export class AddTourPage {


  form: FormGroup;
  constructor(private storage: Storage, public navCtrl: NavController, public events: Events, private formBuilder: FormBuilder, public navParams: NavParams, public alertCtrl: AlertController) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      fromlocation: [, Validators.required],
      tolocation: ['', Validators.required],
    });
    this.storage.get("logged").then((user)=>{
      if(user==null){
        this.navCtrl.setRoot(LoginPage);
      }
    });
    AddTourPage.view()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPersonPage');
    this.form.controls["fromlocation"].setValue(AddTourPage.fromdestination);
    this.form.controls["tolocation"].setValue(AddTourPage.todestination);
    AddTourPage.view()
  }
    static fromdestination="";
   static todestination="";
  addtour = () => {
    /*let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'your name is '+this.form.value.name+' & your age is '+this.form.value.age,
      buttons: ['OK']
    });
    alert.present();*/
    // ListPage.addNewItem(this.form.value.name);

    this.storage.get('tours').then((tours) => {
      let tours_list = tours || []
      tours_list = [...tours_list, {
        name: this.form.value.name,
        date: this.form.value.date,
        time: this.form.value.time,
        fromlocation: this.form.value.fromlocation,
        tolocation:this.form.value.tolocation
      }]
      this.storage.set('tours', tours_list);
      //s.navCtrl.push(ListPage);
    });
  }
  viewmap = ()=>{
    this.navCtrl.push(AddFromMapPage);
    this.form.controls[""]
  }
  static view = ()=>{
    console.log(AddTourPage.fromdestination);
  }
}
