import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Leaderboard2Page } from './leaderboard2.page';

const routes: Routes = [
  {
    path: '',
    component: Leaderboard2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Leaderboard2PageRoutingModule {}
