import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FisrtpagePage } from './fisrtpage.page';

const routes: Routes = [
  {
    path: '',
    component: FisrtpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FisrtpagePageRoutingModule {}
