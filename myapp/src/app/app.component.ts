import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title:"Dashboard" , url:"dashboard"},
    {title:"Profile" , url:"editprofile"},
    {title:"Scorecard" , url:"scorecard"},
    {title:"Trips Report" , url:"trip"},
    {title:"Rewards" , url:"rewards"},
    {title:"LeaderBoard" , url:"leaderboard"},
    {title:"Driving Tips" , url:"drivingtips"},
    {title:"Invite Friends" , url:"invitefriends"},
    {title:"Settings" , url:"settings"},
    {title:"Help" , url:"help"},
    {title:"Sign out" , url:"login"},
    
  ];
  constructor() {}
}
