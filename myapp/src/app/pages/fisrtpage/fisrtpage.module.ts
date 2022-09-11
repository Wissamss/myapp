import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FisrtpagePageRoutingModule } from './fisrtpage-routing.module';

import { FisrtpagePage } from './fisrtpage.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FisrtpagePageRoutingModule
  ],
  declarations: [FisrtpagePage,HeaderComponent,FooterComponent]
})
export class FisrtpagePageModule {}
