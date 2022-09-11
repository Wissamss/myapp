import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppStoreModule} from 'src/store/AppStoreModule';
import { LoadingComponent } from './components/loading/loading.component';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { Papa } from 'ngx-papaparse';
import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { HttpClientModule } from '@angular/common/http';
import { FCM } from '@awesome-cordova-plugins/fcm/ngx';




@NgModule({
  declarations: [AppComponent,LoadingComponent,],
  imports: [ HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,ReactiveFormsModule,FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule,AngularFirestoreModule,...AppStoreModule,StoreDevtoolsModule.instrument({maxAge:25}),],
  providers: [File,SocialSharing,Papa,Geolocation, EmailComposer,FCM,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
