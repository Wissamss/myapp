import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Help2PageRoutingModule } from './help2-routing.module';

import { Help2Page } from './help2.page';
import { ToolBarComponent } from 'src/app/components/tool-bar/tool-bar.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Help2PageRoutingModule
  ],
  declarations: [Help2Page, ToolBarComponent,HeaderComponent,FooterComponent ]
})
export class Help2PageModule {}
