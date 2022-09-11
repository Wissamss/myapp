import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-help2',
  templateUrl: './help2.page.html',
  styleUrls: ['./help2.page.scss'],
})
export class Help2Page implements OnInit {
   body="";
   subject="";
  constructor(private router:Router,private emailComposer:EmailComposer) { }

  ngOnInit() {
  }
  // to send an email 
send(){
  let email = {
    to:'app@gmail.com',
    cc: [],
    bcc: [],
    attachments: [],
    subject: this.subject,
    body:this.body,
    isHtml: false,
    app: 'gmail',
  }
  this.emailComposer.open(email);
  this.router.navigate(['help2'])
}

}
