import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistractedRankingPageRoutingModule } from './distracted-ranking-routing.module';

import { DistractedRankingPage } from './distracted-ranking.page';
import { ToolBarComponent } from 'src/app/components/tool-bar/tool-bar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistractedRankingPageRoutingModule
  ],
  declarations: [DistractedRankingPage,ToolBarComponent,FooterComponent]
})
export class DistractedRankingPageModule {}
