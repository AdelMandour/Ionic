import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToursPage } from '../pages/tours/tours';
import { LoginPage } from '../pages/login/login';
import { AddTourPage } from '../pages/add-tour/add-tour';
import { RegisterPage } from '../pages/register/register';
import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  public pages: Array<{ title: string, component: any }>;

  constructor(private storage: Storage, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation

  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {


  
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title == "logout") {
      this.storage.set("logged",null);
      this.nav.setRoot(LoginPage);
    } else {
      this.nav.setRoot(page.component);
    }
  }
}
