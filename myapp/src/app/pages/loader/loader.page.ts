import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    //should go to login page after load for seconde
    setTimeout(()=>{
      this.router.navigate(['login']);
    },1000)
    
  }

}
