import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Devicesetup3PageRoutingModule } from './devicesetup3-routing.module';

import { Devicesetup3Page } from './devicesetup3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Devicesetup3PageRoutingModule
  ],
  declarations: [Devicesetup3Page]
})
export class Devicesetup3PageModule {}
