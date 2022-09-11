import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashBoardPageRoutingModule } from './dashboard-routing.module';

import { DashBoardPage } from './dashboard.page';
import { ProgressBarComponent } from 'src/app/components/progress-bar/progress-bar.component';
import { ToolBarComponent } from 'src/app/components/tool-bar/tool-bar.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashBoardPageRoutingModule
  ],
  declarations: [DashBoardPage,ProgressBarComponent,ToolBarComponent,HeaderComponent,FooterComponent],


})
export class DashBoardPageModule {}
