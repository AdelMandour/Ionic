import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ToursPage } from '../tours/tours';
/**
 * Generated class for the MapLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@Component({
  selector: 'page-map-location',
  templateUrl: 'map-location.html',
})
export class MapLocationPage {
position1:any=null;
position2:any=null;
static Item:any=null;
coordinates=[];
  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
 
  }
 
  ionViewDidLoad(){
    this.loadMap();
    console.log(MapLocationPage.Item)
  }
 
  loadMap(){
 
    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker();
    }, (err) => {
      console.log(err);
    });
 
  }
  addMarker(){
    this.position1=JSON.parse(MapLocationPage.Item.fromlocation);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.position1
    });
   
    let content = "<h4>Information!</h4>";         
   
    this.addInfoWindow(marker, content);
    this.position2=JSON.parse(MapLocationPage.Item.tolocation);
    let marker2 = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.position2
    });
   
    let contents = "<h4>Information!</h4>";         
   
    this.addInfoWindow(marker2, contents);
   
     // console.log(JSON.parse(MapLocationPage.Item.tolocation))
      
      this.coordinates.push(this.position1);
     this.coordinates.push(this.position2);
      var flightPath = new google.maps.Polyline({
        path: this.coordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      flightPath.setMap(this.map);
      ToursPage.showmap=false;
  }
  addInfoWindow(marker, content){
 
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
   
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
   
  }

}
