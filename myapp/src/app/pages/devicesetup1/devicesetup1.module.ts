import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Devicesetup1PageRoutingModule } from './devicesetup1-routing.module';

import { Devicesetup1Page } from './devicesetup1.page';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Devicesetup1PageRoutingModule
  ],
  declarations: [Devicesetup1Page,FooterComponent]
})
export class Devicesetup1PageModule {}
