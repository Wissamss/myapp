import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fisrtpage',
  templateUrl: './fisrtpage.page.html',
  styleUrls: ['./fisrtpage.page.scss'],
})
export class FisrtpagePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
 profile(){
  this.router.navigate(['profile']);
 }
}
