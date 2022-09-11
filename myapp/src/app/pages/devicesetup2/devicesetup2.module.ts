import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Devicesetup2PageRoutingModule } from './devicesetup2-routing.module';

import { Devicesetup2Page } from './devicesetup2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Devicesetup2PageRoutingModule
  ],
  declarations: [Devicesetup2Page]
})
export class Devicesetup2PageModule {}
