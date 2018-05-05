import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AddTourPage } from '../add-tour/add-tour';
/**
 * Generated class for the MapLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@Component({
  selector: 'page-add-from-map',
  templateUrl: 'add-from-map.html',
})
export class AddFromMapPage {
  position1:any=null;
  position2:any=null;
  coordinates=[];
    @ViewChild('map') mapElement: ElementRef;
    map: any;
   
    constructor(public navCtrl: NavController,public geolocation: Geolocation) {
   
    }
   
    ionViewDidLoad(){
      this.loadMap();
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
   
      }, (err) => {
        console.log(err);
      });
   
    }
    addMarker(){
   
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
      });
     
      let content = "<h4>Information!</h4>";         
     
      this.addInfoWindow(marker, content);
      if(this.position1==null){
        this.position1=JSON.stringify(marker.position);
        this.coordinates.push(JSON.parse(this.position1));
        
      }else{
        this.position2=JSON.stringify(marker.position);
        this.coordinates.push(this.position2);
        var flightPath = new google.maps.Polyline({
          path: this.coordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        flightPath.setMap(this.map);
        AddTourPage.fromdestination=this.position1;
        AddTourPage.todestination=this.position2;
        this.navCtrl.setRoot(AddTourPage);
      }
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
