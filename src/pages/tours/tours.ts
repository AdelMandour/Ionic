import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AddTourPage } from '../add-tour/add-tour';
import { SingleViewPage } from '../single-view/single-view';
import { LoginPage } from '../login/login';
import { MapLocationPage } from '../map-location/map-location';
/**
 * Generated class for the ToursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tours',
  templateUrl: 'tours.html',
})
export class ToursPage {
  items = [];

  constructor(private storage: Storage, public navCtrl: NavController) {
    this.storage.get("logged").then((user) => {
      if (user == null) {
        this.navCtrl.setRoot(LoginPage);
      } else {
        this.initializeItems();
      }
    });

  }
  initializeItems() {
    this.storage.get('tours').then((items) => {
      this.items = items || [];
    });
  }

  getItems(ev) {
    // Reset items back to all of the items
    // this.initializeItems();

    // set val to the value of the ev target
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      console.log(this.items)
    } else {
      this.initializeItems();
    }
  }
  addnew = () => {
    this.navCtrl.push(AddTourPage);
  }
  static showmap = false;
  showMap = (item) => {
    ToursPage.showmap = true;
    MapLocationPage.Item=item
    this.navCtrl.push(MapLocationPage);
    
  }
  itemTapped(event, item) {
    if (ToursPage.showmap==false) {
      this.navCtrl.push(SingleViewPage, {
        item: item
      });
    }
  }

}
