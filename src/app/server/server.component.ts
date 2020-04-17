import { Component, OnInit } from '@angular/core';

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styles:[`
    .online{
        color:white;
    }
    `]
    
})
export class ServerComponent implements OnInit {
    serverId=10002;
    serverStatus = '';
    

    constructor(){
        this.serverStatus=Math.random()>0.5?'Online':'Offline';
    }
    ngOnInit() {
    }

    getServerStatus(){
       return this.serverStatus;
    }
    getColor(){
        return this.serverStatus==='Online'?'green':'red';

    }
    
}