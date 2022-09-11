import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrivingtipsPage } from './drivingtips.page';

const routes: Routes = [
  {
    path: '',
    component: DrivingtipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrivingtipsPageRoutingModule {}
