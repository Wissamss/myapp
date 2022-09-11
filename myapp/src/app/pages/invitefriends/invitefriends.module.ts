import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitefriendsPageRoutingModule } from './invitefriends-routing.module';

import { InvitefriendsPage } from './invitefriends.page';
import { ToolBarComponent } from 'src/app/components/tool-bar/tool-bar.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitefriendsPageRoutingModule
  ],
  declarations: [InvitefriendsPage,ToolBarComponent,HeaderComponent,FooterComponent],
})
export class InvitefriendsPageModule {}
