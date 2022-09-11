import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devicesetup1',
  templateUrl: './devicesetup1.page.html',
  styleUrls: ['./devicesetup1.page.scss'],
})
export class Devicesetup1Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  setup(){
  this.router.navigate(['devicesetup2']);
}
}
