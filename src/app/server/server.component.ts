import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverID:number = 10;
  serverStatus:string = "Offline"; 
  allowNewServer:boolean = false;
  serverCreationStatus:string = "No Server was created !";
  serverName:string = "";

  constructor() { 

    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000)

  }
  
 


  ngOnInit() {
    this.getServerStatus();
  }

  getServerStatus(){
    return this.serverStatus;
  }

  onCreateServer() {
    this.serverCreationStatus = "Server is created! Name is " + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value
  }
}
