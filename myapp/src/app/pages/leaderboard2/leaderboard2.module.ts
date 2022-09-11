import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Leaderboard2PageRoutingModule } from './leaderboard2-routing.module';

import { Leaderboard2Page } from './leaderboard2.page';
import { ToolBarComponent } from 'src/app/components/tool-bar/tool-bar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Leaderboard2PageRoutingModule
  ],
  declarations: [Leaderboard2Page,ToolBarComponent,FooterComponent]
})
export class Leaderboard2PageModule {}
