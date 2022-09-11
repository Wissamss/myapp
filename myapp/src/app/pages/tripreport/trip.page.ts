import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Papa } from 'ngx-papaparse';
import { AccessService } from 'src/app/services/access.service';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.scss'],
})
export class TripPage implements OnInit {
  csvData:any[]=[];
  headerRow:any[]=[];

  constructor(private fireauth:AuthService, private accessservice:AccessService,private navCtrl:NavController,private router:Router,private http:HttpClient,private papa:Papa) { 
    this.loadCSV();
  }
 
  ngOnInit() { 
  }

   //loading the data from csv file
   private loadCSV(){
    this.http.get('./assets/tripdetails.csv',{
      responseType:'text'
    }).subscribe(
      data=>this.extractData(data),
      err=>console.log('something went wrong :',err)
    )
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


  details(){
    this.router.navigate(['tripdetails'])
  }

}
