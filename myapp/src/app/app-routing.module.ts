import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    
    
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashBoardPageModule),
    
  },
  {
    path: 'trip',
    loadChildren: () => import('./pages/tripreport/trip.module').then( m => m.TripPageModule),
   
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./pages/editprofile/editprofile.module').then( m => m.EditprofilePageModule),
    
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule),
   
  },
  {
    path: 'fisrtpage',
    loadChildren: () => import('./pages/fisrtpage/fisrtpage.module').then( m => m.FisrtpagePageModule),
   
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule),
  
  },
  {
    path: 'invitefriends',
    loadChildren: () => import('./pages/invitefriends/invitefriends.module').then( m => m.InvitefriendsPageModule),
    
  },
  {
    path: 'drivingtips',
    loadChildren: () => import('./pages/drivingtips/drivingtips.module').then( m => m.DrivingtipsPageModule),
  
  },
  {
    path: 'rewards',
    loadChildren: () => import('./pages/rewards/rewards.module').then( m => m.RewardsPageModule),
  
  },
  {
    path: 'reward',
    loadChildren: () => import('./pages/reward/reward.module').then( m => m.RewardPageModule),
 
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help1/help.module').then( m => m.HelpPageModule),
    
  },
  {
    path: 'devicesetup1',
    loadChildren: () => import('./pages/devicesetup1/devicesetup1.module').then( m => m.Devicesetup1PageModule),
  
  },
  {
    path: 'devicesetup2',
    loadChildren: () => import('./pages/devicesetup2/devicesetup2.module').then( m => m.Devicesetup2PageModule),
    
  },
  {
    path: 'devicesetup3',
    loadChildren: () => import('./pages/devicesetup3/devicesetup3.module').then( m => m.Devicesetup3PageModule),
   
  },
  {
    path: 'tripdetails',
    loadChildren: () => import('./pages/tripdetails1/tripdetails.module').then( m => m.TripdetailsPageModule),
    
  },
  {
    path: 'tripdetails2',
    loadChildren: () => import('./pages/tripdetails2/tripdetails2.module').then( m => m.Tripdetails2PageModule),
   
  },
  {
    path: 'scorecard',
    loadChildren: () => import('./pages/scorecard/scorecard.module').then( m => m.ScorecardPageModule),
    
  },
  {
    path: 'leaderboard',
    loadChildren: () => import('./pages/leaderboard1/leaderboard.module').then( m => m.LeaderboardPageModule),
    
  },
  {
    path: 'leaderboard2',
    loadChildren: () => import('./pages/leaderboard2/leaderboard2.module').then( m => m.Leaderboard2PageModule),
    
  },
  {
    path: 'speeding-ranking',
    loadChildren: () => import('./pages/speeding-ranking/speeding-ranking.module').then( m => m.SpeedingRankingPageModule)
  },
  {
    path: 'distracted-ranking',
    loadChildren: () => import('./pages/distracted-ranking/distracted-ranking.module').then( m => m.DistractedRankingPageModule)
  },
  {
    path: 'help2',
    loadChildren: () => import('./pages/help2/help2.module').then( m => m.Help2PageModule)
  },
  
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
