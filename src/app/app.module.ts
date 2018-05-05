import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ToursPage } from '../pages/tours/tours';
import { AddTourPage } from '../pages/add-tour/add-tour';
import { IonicStorageModule } from '@ionic/storage';
import { SingleViewPage } from '../pages/single-view/single-view';
import { MyHeaderPage } from '../components/myheader/myheader';
import { Geolocation } from '@ionic-native/geolocation';
import { MapLocationPage } from '../pages/map-location/map-location';
import { AddFromMapPage } from '../pages/add-from-map/add-from-map';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    ToursPage,
    AddTourPage,
    SingleViewPage,
    MyHeaderPage,
    MapLocationPage,
    AddFromMapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    ToursPage,
    AddTourPage,
    SingleViewPage,
    MyHeaderPage,
    MapLocationPage,
    AddFromMapPage
  ],
  providers: [
    StatusBar,
    MyHeaderPage,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
