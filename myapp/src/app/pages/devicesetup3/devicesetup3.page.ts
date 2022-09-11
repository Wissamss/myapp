import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devicesetup3',
  templateUrl: './devicesetup3.page.html',
  styleUrls: ['./devicesetup3.page.scss'],
})
export class Devicesetup3Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  setup(){
    this.router.navigate(['devicesetup1']);
  }
}
