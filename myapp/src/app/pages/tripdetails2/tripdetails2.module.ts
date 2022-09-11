import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tripdetails2PageRoutingModule } from './tripdetails2-routing.module';

import { Tripdetails2Page } from './tripdetails2.page';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tripdetails2PageRoutingModule
  ],
  declarations: [Tripdetails2Page,FooterComponent]
})
export class Tripdetails2PageModule {}
