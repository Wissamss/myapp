import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeedingRankingPage } from './speeding-ranking.page';

const routes: Routes = [
  {
    path: '',
    component: SpeedingRankingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeedingRankingPageRoutingModule {}
