import { Component, OnInit } from '@angular/core';

@Component({
    selector:"app-server",
    templateUrl:"./server.component.html"
})
export class ServerComponent implements OnInit{
    
    addServer=false;
    creationStatus='Server is not created';
    serverId=10;
    serverStatus='offline';
    constructor(){
        setTimeout(()=>{
            this.addServer=true;
        },2000);
    }
    getServerStatus(){
        return this.serverStatus;

    }
    ngOnInit(): void {
       
    }

    onCreation(){
    this.creationStatus='Server is created successfully';
    }

}