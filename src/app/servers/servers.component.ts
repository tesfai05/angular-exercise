import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  
  serverCreated=false;
  allowNewServer = false;
  creationStatus = 'No Server is created';
  serverName = '';
  servers=['Eri-Sat','Eri-Media'];

  constructor() {
      setTimeout(() => {
          this.allowNewServer = true;
      }, 5000);
  }
  ngOnInit() {
  }
  onCreation() {
      this.serverCreated=true;
      this.servers.push(this.serverName);
      this.creationStatus = 'Server is created successfully with a name : '+this.serverName;
  }
  onUpdateServerName(event: Event) {
      this.serverName = (<HTMLInputElement>event.target).value;
  }

}
