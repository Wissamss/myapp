import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard2',
  templateUrl: './leaderboard2.page.html',
  styleUrls: ['./leaderboard2.page.scss'],
})
export class Leaderboard2Page implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
 speedranking(){
  this.router.navigate(['speeding-ranking'])
 }
 distractedranking(){
  this.router.navigate(['distracted-ranking'])
 }
}
