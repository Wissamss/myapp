import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitefriendsPage } from './invitefriends.page';

const routes: Routes = [
  {
    path: '',
    component: InvitefriendsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitefriendsPageRoutingModule {}
