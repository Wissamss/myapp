import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';
import { ScorecardPage } from '../scorecard/scorecard.page';

@Component({
  selector: 'app-tripdetails',
  templateUrl: './tripdetails.page.html',
  styleUrls: ['./tripdetails.page.scss'],
})
export class TripdetailsPage implements OnInit {
   speedTimes:number=3;
   distractedTimes:number=5;
   speedscore;
   distractedscore;
   overallscore;
   lat;
   lng;
  constructor(private router:Router,private geo:Geolocation,private http:HttpClient,private papa:Papa) {
   this.speedscore=this.getSpeedScore();
   this.distractedscore=this.getDistractedScore();
   this.overallscore=this.getTripScore();
   }

  ngOnInit() {
  }
//to get geolocation coords
  whereIam(){
   this.geo.getCurrentPosition({
    timeout:1000,
    enableHighAccuracy:true
   }).then((res)=>{
   this.lat=res.coords.latitude;
   this.lng=res.coords.longitude;
   });
   
 };

getSpeedScore(){
  if(this.speedTimes==0){
    return 0
  }
  if(this.speedTimes==2){
    return 4
  }
  if(this.speedTimes==3){
    return  3
  }
  if(this.speedTimes==4 ){
    return 2
  }
  if(this.speedTimes>4 ){
    return 1 
  }
  
}

getDistractedScore(){
  if(this.distractedTimes==0){
    return 5
  }
  if(this.distractedTimes<2){
    return 4
  }
  if(this.distractedTimes==3){
    return  3
  }
  if(this.distractedTimes==4 ){
    return 2
  }
  if(this.distractedTimes>4 ){
    return 1 
  }
  
}
getTripScore(){
  if(this.distractedTimes<2 && this.speedTimes<2){
    return 5
  }
  if(this.distractedTimes==4 && this.speedTimes==2){
    return 3
  }
  if(this.distractedTimes==5 && this.speedTimes==3){
    return 2
  }
}
 
details(){
  this.router.navigate(['tripdetails2'])
}

}