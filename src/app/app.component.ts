import { Component, OnInit } from '@angular/core';
import { userservice } from './usersservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  activeUsers = [];
  inactiveUsers = [];
 
  constructor(private usrservice:userservice) {};

  ngOnInit(): void {
    this.activeUsers = this.usrservice.activeUsers;
    this.inactiveUsers = this.usrservice.inactiveUsers;
  }

  onSetToInactive(id: number) {

    this.usrservice.onSetToInactive(id);
  }

  onSetToActive(id: number) {
    this.usrservice.onSetToActive(id);
  }
}
