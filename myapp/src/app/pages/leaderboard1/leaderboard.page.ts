import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {
  // variables related to progress bar 
  loadProgress = 70;
  loadProgress1 = 50;
  loadProgress2 = 30;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  rank(){
    this.router.navigate(['leaderboard2'])
  }

}
