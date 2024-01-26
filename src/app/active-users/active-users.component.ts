import { Component, EventEmitter, Input, Output } from '@angular/core';
import { userservice } from '../usersservice.service';
@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[] = this.usrservice.activeUsers;
  constructor(private usrservice:userservice) {};
  onSetToInactive(id: number) {
    this.usrservice.onSetToInactive(id);

  }
}
