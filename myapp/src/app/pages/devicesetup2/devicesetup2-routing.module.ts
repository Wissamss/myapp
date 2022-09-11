import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Devicesetup2Page } from './devicesetup2.page';

const routes: Routes = [
  {
    path: '',
    component: Devicesetup2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Devicesetup2PageRoutingModule {}
