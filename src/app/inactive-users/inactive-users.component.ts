import { Component, EventEmitter, Input, Output } from '@angular/core';
import { userservice } from '../usersservice.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[] = this.usrservice.inactiveUsers;
  @Output() userSetToActive = new EventEmitter<number>();
  constructor(private usrservice:userservice) {};

  onSetToActive(id: number) {
    this.usrservice.onSetToActive(id);
  }
}
