import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Profile } from 'src/app/model/user/Profile';
import { User } from 'src/app/model/user/User';
import { AccessService } from 'src/app/services/access.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  editprofileform:FormGroup;
  user:User;
  profile:Profile;
  email:string;
  constructor(private router:Router,private fireauth:AuthService,private store:AccessService,private navCtrl: NavController,private formBuilder: FormBuilder,private accessservice:AccessService,) {
    this.editprofileform = this.formBuilder.group({
      age:[''],
      adresse:[''],
      gender:[''],
      educationdegree:[''],
      occupation:[''],
      maritalstatus:[''],
      residencezone:[''],
      vehiclecapacity:[''],
      drivingexperience:[''],
      averageannualmileage:[''],
      frequencyofmotorwayuse:[''],
      cartype:[''],
      drivingfrequency:[''],
      commutedreguraly:[''],
      professionaldrivers:[''],
      illness:[''],

    });
  }

  ngOnInit() {
    this.fireauth.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.email= res.email;
        this.accessservice.getUser(this.email).subscribe(res => {
          this.user=<User>res ;
          console.log(res);
          })
      } else {
        this.navCtrl.navigateForward('/login'); 
      }
    }, err => {
      console.log('err', err);
    })


  }
    edit(){
      this.fireauth.userDetails().subscribe(res => {
        console.log('res', res);
        if (res !== null) {
          this.store.newProfile(this.user,this.editprofileform.value);
        } 
          this.navCtrl.navigateForward('/dashboard'); 
      }, err => {
        console.log('err', err);
      })
  
    }
  }

