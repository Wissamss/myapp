import { HttpClient } from '@angular/common/http';
import { Component,} from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Platform } from '@ionic/angular';
import { Papa } from 'ngx-papaparse';
import {File} from '@ionic-native/file/ngx'
import { Router } from '@angular/router';
@Component({
  selector: 'app-tripdetails2',
  templateUrl: './tripdetails2.page.html',
  styleUrls: ['./tripdetails2.page.scss'],
})
export class Tripdetails2Page{
  //variables to contains data and header of CSV file
  csvData: any[] = [];
  headerRow: any[] = [];
 constructor(
    private http: HttpClient,
    private papa: Papa,
    private plt: Platform,
    private file:File,
    private socialSharing: SocialSharing,
    private router:Router,
  ) {
    this.loadCSV();
  }
 //to access the csv file
  private loadCSV() {
    this.http
      .get('./assets/tripQ&A.csv', {
        responseType: 'text'
      })
      .subscribe(
        data => this.extractData(data),
        err => console.log('something went wrong: ', err)
      );
  }
 // import data using papaparse packaging
  private extractData(res) {
    let csvData = res || '';
 
    this.papa.parse(csvData, {
      complete: parsedData => {
        this.headerRow = parsedData.data.splice(0, 1)[0];
        this.csvData = parsedData.data;
        console.log('my array :',this.csvData)
      }
    });
  }
 //export data
  exportCSV() {
    let csv = this.papa.unparse({
      fields: this.headerRow,
      data: this.csvData,
    });
    console.log('csv:',csv);
    // native platform sharing purpose
    if (this.plt.is('cordova')) {
      this.file.writeFile(this.file.dataDirectory, 'data.csv', csv, {replace: true}).then( res => {
        this.socialSharing.share(null, null, res.nativeURL, null).then(e =>{
          // Success
        }).catch(e =>{
          console.log('Share failed:', e)
        });
      }, err => {
        console.log('Error: ', err);
      });
 
    } else {
      //  Desktop download purpose
      var blob = new Blob([csv]);
      var a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'newdata.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    //after sending the answer, user go back to tripdetails page
    this.router.navigate(['tripdetails'])
  }
  //to input unlimited characters
  trackByFn(index: any, item: any) {
    return index;
  }
}


