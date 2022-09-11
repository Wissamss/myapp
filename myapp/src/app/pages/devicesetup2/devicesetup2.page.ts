import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-devicesetup2',
  templateUrl: './devicesetup2.page.html',
  styleUrls: ['./devicesetup2.page.scss'],
})
export class Devicesetup2Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  setup(){
    this.router.navigate(['devicesetup3']);
  }

}
