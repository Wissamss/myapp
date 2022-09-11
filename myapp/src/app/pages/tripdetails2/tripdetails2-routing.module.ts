import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tripdetails2Page } from './tripdetails2.page';

const routes: Routes = [
  {
    path: '',
    component: Tripdetails2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tripdetails2PageRoutingModule {}
