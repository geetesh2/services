import { Component, EventEmitter, Output } from '@angular/core';
import { logging } from '../logging.service';
import { Accountservice } from '../accountservice.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[logging]
})
export class NewAccountComponent {
  constructor(private loggingservice:logging,private accountservice:Accountservice) {
    this.accountservice.statusUpdated.subscribe(
      (status:string) => {alert("new status" + status)}
    );
  };
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountservice.addAccount(accountName,accountStatus);
    // this.loggingservice.logstatuschange(accountStatus);
    
  }
}
