import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Devicesetup1Page } from './devicesetup1.page';

const routes: Routes = [
  {
    path: '',
    component: Devicesetup1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Devicesetup1PageRoutingModule {}
