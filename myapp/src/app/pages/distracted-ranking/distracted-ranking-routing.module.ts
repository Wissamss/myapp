import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistractedRankingPage } from './distracted-ranking.page';

const routes: Routes = [
  {
    path: '',
    component: DistractedRankingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistractedRankingPageRoutingModule {}
