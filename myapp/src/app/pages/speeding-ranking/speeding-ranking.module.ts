import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeedingRankingPageRoutingModule } from './speeding-ranking-routing.module';

import { SpeedingRankingPage } from './speeding-ranking.page';
import { ToolBarComponent } from 'src/app/components/tool-bar/tool-bar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeedingRankingPageRoutingModule
  ],
  declarations: [SpeedingRankingPage,ToolBarComponent,FooterComponent]
})
export class SpeedingRankingPageModule {}
