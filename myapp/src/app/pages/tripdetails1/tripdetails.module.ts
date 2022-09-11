import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripdetailsPageRoutingModule } from './tripdetails-routing.module';

import { TripdetailsPage } from './tripdetails.page';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripdetailsPageRoutingModule
  ],
  declarations: [TripdetailsPage,FooterComponent]
})
export class TripdetailsPageModule {}
