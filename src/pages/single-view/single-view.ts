import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SingleViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-view',
  templateUrl: 'single-view.html',
})
export class SingleViewPage {
  selectedItem: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleViewPage');
  }

}
