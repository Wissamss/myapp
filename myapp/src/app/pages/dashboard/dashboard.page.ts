import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashBoardPage implements OnInit {
  //variable of progress bar
  loadProgress = 0;
  constructor(private router:Router) { }

 ngOnInit() {
  }

}
