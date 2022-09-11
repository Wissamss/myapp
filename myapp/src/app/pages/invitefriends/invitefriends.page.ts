import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@Component({
  selector: 'app-invitefriends',
  templateUrl: './invitefriends.page.html',
  styleUrls: ['./invitefriends.page.scss'],
})
export class InvitefriendsPage implements OnInit {
  to='';
  constructor(private emailComposer:EmailComposer) { }

  ngOnInit() {
  }
// to send an email 
send(){
  let email = {
    to:this.to,
    cc: [],
    bcc: [],
    attachments: [],
    subject: 'Install Driving app',
    body: 'install driving app to help you be a better driver!',
    isHtml: false,
    app: 'gmail',
  }
  this.emailComposer.open(email);
}
}
