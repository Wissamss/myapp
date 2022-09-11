import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrivingtipsPageRoutingModule } from './drivingtips-routing.module';

import { DrivingtipsPage } from './drivingtips.page';
import { ToolBarComponent } from 'src/app/components/tool-bar/tool-bar.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrivingtipsPageRoutingModule
  ],
  declarations: [DrivingtipsPage,ToolBarComponent,HeaderComponent,FooterComponent]
})
export class DrivingtipsPageModule {}
