
import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform } from '@ionic/angular';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-drivingtips',
  templateUrl: './drivingtips.page.html',
  styleUrls: ['./drivingtips.page.scss'],
})
export class DrivingtipsPage  {
  // variables 
   csvData:any[]=[];
   headerRow:any[]=[];
   i:number;
   j:number;
  constructor(private http:HttpClient,private papa:Papa) { 
   this.loadCSV();
   // we genarte a random index to access the csv file rows
   this.i=this.random();
   this.j=this.random();
  }
  //loading the data from csv file
  private loadCSV(){
    this.http.get('./assets/drivingtips.csv',{
      responseType:'text'
    }).subscribe(
      data=>this.extractData(data),
      err=>console.log('something went wrong :',err)
    )
  }
  random(): number {
    let rand = Math.floor(Math.random()*3);
    return rand;       
 }
 //extract the data from csv file
  extractData(res){
    let csvData=res|| '';
    this.papa.parse(csvData,{
      complete:parsedData=>{
       this.headerRow=parsedData.data.splice(0,1)[0];
       this.csvData=parsedData.data;
       console.log('my array :',this.csvData)
      }
    });
  }

}
